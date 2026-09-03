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
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(2.25, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x9eb2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const shell = new THREE.Mesh(geometry, material);
    group.add(shell);

    const glowGeometry = new THREE.IcosahedronGeometry(1.72, 2);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6f87ff,
      transparent: true,
      opacity: 0.055,
      wireframe: true,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(520 * 3);
    for (let i = 0; i < 520; i += 1) {
      const radius = 3.1 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xb9c6ff,
      size: 0.018,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

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
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (time: number) => {
      if (disposed) return;
      pointer.lerp(target, 0.045);

      group.rotation.y += reduceMotion ? 0.001 : 0.0022;
      group.rotation.x += reduceMotion ? 0.0004 : 0.0009;
      group.rotation.x += (pointer.y * 0.18 - group.rotation.x) * 0.015;
      group.rotation.y += (pointer.x * 0.22 - group.rotation.y) * 0.015;
      points.rotation.y = time * 0.000018;
      points.rotation.x = pointer.y * 0.05;

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
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="three-field" aria-hidden="true" />;
}
