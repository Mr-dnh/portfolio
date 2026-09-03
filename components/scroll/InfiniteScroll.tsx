"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

type InfiniteScrollProps = { children: ReactNode };

export function InfiniteScroll({ children }: InfiniteScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(viewport.querySelectorAll<HTMLElement>(".portfolio-shell > section"));
    if (!sections.length) return;

    gsap.registerPlugin(Observer);

    const state = { value: 0 };
    let target = 0;
    let locked = false;

    const wrap = (value: number, length: number) => {
      const result = value % length;
      return result < 0 ? result + length : result;
    };

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

    const announce = (index: number) => {
      sections.forEach((section, sectionIndex) => {
        section.toggleAttribute("data-active", sectionIndex === index);
      });
    };

    const go = (direction: number) => {
      if (locked) return;
      locked = true;
      target += direction;
      announce(wrap(Math.round(target), sections.length));

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
          locked = false;
        },
      });
    };

    render();
    announce(0);

    const observer = Observer.create({
      target: viewport,
      type: "wheel,touch,pointer",
      tolerance: 18,
      wheelSpeed: 1,
      preventDefault: true,
      onDown: () => go(1),
      onUp: () => go(-1),
    });

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
      observer.kill();
      window.removeEventListener("keydown", keydown);
      gsap.killTweensOf(state);
    };
  }, []);

  return (
    <div ref={viewportRef} className="infinite-viewport">
      {children}
    </div>
  );
}
