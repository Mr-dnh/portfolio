"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

type InfiniteScrollProps = { children: ReactNode };

export function InfiniteScroll({ children }: InfiniteScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(viewport.querySelectorAll<HTMLElement>(".portfolio-shell > section"));
    if (!sections.length) return;

    const state = { value: 0 };
    let target = 0;
    let locked = false;
    let touchStartY: number | null = null;
    let touchStartX: number | null = null;

    const wrap = (value: number, length: number) => {
      const result = value % length;
      return result < 0 ? result + length : result;
    };

    const getRevealElements = (section: HTMLElement) =>
      Array.from(section.children).filter((element): element is HTMLElement => element instanceof HTMLElement);

    const render = () => {
      const count = sections.length;
      sections.forEach((section, index) => {
        let offset = index - state.value;
        while (offset > count / 2) offset -= count;
        while (offset < -count / 2) offset += count;

        gsap.set(section, {
          yPercent: offset * 100,
          autoAlpha: Math.abs(offset) > 1.55 ? 0 : 1,
          zIndex: Math.round(100 - Math.abs(offset)),
        });
      });
    };

    const prepareReveal = (index: number) => {
      const elements = getRevealElements(sections[index]);
      if (!elements.length || reduceMotion) return;
      gsap.killTweensOf(elements);
      gsap.set(elements, { autoAlpha: 0, y: 28 });
    };

    const reveal = (index: number) => {
      const elements = getRevealElements(sections[index]);
      if (!elements.length) return;

      gsap.killTweensOf(elements);

      if (reduceMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const activate = (index: number) => {
      sections.forEach((section, sectionIndex) => {
        section.toggleAttribute("data-active", sectionIndex === index);
      });
    };

    const go = (direction: 1 | -1) => {
      if (locked) return;
      locked = true;
      target += direction;

      const nextIndex = wrap(Math.round(target), sections.length);
      prepareReveal(nextIndex);
      activate(nextIndex);

      gsap.to(state, {
        value: target,
        duration: reduceMotion ? 0 : 0.95,
        ease: "power4.inOut",
        overwrite: true,
        onUpdate: render,
        onComplete: () => {
          const normalized = wrap(state.value, sections.length);
          state.value = normalized;
          target = normalized;
          render();
          reveal(normalized);
          locked = false;
        },
      });
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 8) return;
      go(event.deltaY > 0 ? 1 : -1);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      touchStartX = event.clientX;
      touchStartY = event.clientY;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType === "mouse" || touchStartY === null || touchStartX === null) return;

      const deltaX = event.clientX - touchStartX;
      const deltaY = event.clientY - touchStartY;
      touchStartX = null;
      touchStartY = null;

      if (Math.abs(deltaY) < 45 || Math.abs(deltaY) < Math.abs(deltaX) * 1.15) return;

      // Finger moving down means navigating to the previous section.
      // Finger moving up means navigating to the next section.
      go(deltaY > 0 ? -1 : 1);
    };

    sections.forEach((section) => {
      const elements = getRevealElements(section);
      if (reduceMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
      } else {
        gsap.set(elements, { autoAlpha: 0, y: 28 });
      }
    });

    render();
    activate(0);
    reveal(0);

    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("pointerdown", onPointerDown, { passive: true });
    viewport.addEventListener("pointerup", onPointerUp, { passive: true });

    const keydown = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        go(1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("keydown", keydown);

    return () => {
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("keydown", keydown);
      sections.forEach((section) => gsap.killTweensOf(getRevealElements(section)));
      gsap.killTweensOf(state);
    };
  }, []);

  return (
    <div ref={viewportRef} className="infinite-viewport">
      {children}
    </div>
  );
}
