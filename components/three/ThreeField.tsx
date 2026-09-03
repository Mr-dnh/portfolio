"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const eyes = new THREE.Group();
    scene.add(eyes);

    const eyeGeometry = new THREE.SphereGeometry(1.18, 48, 48);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xf4f6ff });
    const irisGeometry = new THREE.SphereGeometry(0.48, 40, 40);
    const irisMaterial = new THREE.MeshBasicMaterial({ color: 0x657dff });
    const pupilGeometry = new THREE.SphereGeometry(0.22, 32, 32);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x05070e });
    const highlightGeometry = new THREE.SphereGeometry(0.075, 20, 20);
    const highlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const eyeData = [
      { x: -1.28, z: 0 },
      { x: 1.28, z: 0 },
    ];

    const eyeMeshes = eyeData.map(({ x, z }) => {
      const eye = new THREE.Group();
      eye.position.set(x, 0, z);

      const white = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye.add(white);

      const iris = new THREE.Mesh(irisGeometry, irisMaterial);
      iris.position.set(0, 0, 1.04);
      eye.add(iris);

      const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil.position.set(0, 0, 1.42);
      eye.add(pupil);

      const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
      highlight.position.set(-0.09, 0.1, 1.62);
      eye.add(highlight);

      eyes.add(eye);
      return { iris, pupil, highlight };
    });

    const orbitalGeometry = new THREE.TorusGeometry(3.1, 0.012, 8, 180);
    const orbitalMaterial = new THREE.MeshBasicMaterial({
      color: 0x9eb2ff,
      transparent: true,
      opacity: 0.34,
    });
    const orbit = new THREE.Mesh(orbitalGeometry, orbitalMaterial);
    orbit.rotation.x = Math.PI * 0.5;
    scene.add(orbit);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 360;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 3.8 + Math.random() * 2.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xb9c6ff,
      size: 0.02,
      transparent: true,
      opacity: 0.42,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    let frame = 0;
    let disposed = false;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const move = (event: PointerEvent) => {
      if (reduceMotion) return;

      // Browser coordinates grow downward; Three.js coordinates grow upward.
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (time: number) => {
      if (disposed) return;
      pointer.lerp(target, 0.12);

      const followX = THREE.MathUtils.clamp(pointer.x * 0.42, -0.42, 0.42);
      const followY = THREE.MathUtils.clamp(pointer.y * 0.30, -0.30, 0.30);

      eyes.position.x = pointer.x * 0.28;
      eyes.position.y = pointer.y * 0.18;
      eyes.rotation.y = pointer.x * 0.11;
      eyes.rotation.x = pointer.y * 0.08;

      eyeMeshes.forEach(({ iris, pupil, highlight }) => {
        // Keep each iris/cornea optically centered; only the pupil tracks the pointer.
        iris.position.x = 0;
        iris.position.y = 0;
        pupil.position.x = followX;
        pupil.position.y = followY;
        highlight.position.x = followX - 0.09;
        highlight.position.y = followY + 0.1;
      });

      orbit.rotation.z = time * 0.0002 + pointer.x * 0.12;
      orbit.rotation.x = Math.PI * 0.5 + pointer.y * 0.1;
      particles.rotation.y = time * 0.000018 + pointer.x * 0.03;
      particles.rotation.x = pointer.y * 0.04;

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      eyeGeometry.dispose();
      eyeMaterial.dispose();
      irisGeometry.dispose();
      irisMaterial.dispose();
      pupilGeometry.dispose();
      pupilMaterial.dispose();
      highlightGeometry.dispose();
      highlightMaterial.dispose();
      orbitalGeometry.dispose();
      orbitalMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="three-field" aria-hidden="true" />;
}
