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
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const orb = new THREE.Group();
    scene.add(orb);

    const orbGeometry = new THREE.SphereGeometry(1.25, 48, 48);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0x7288ff,
      transparent: true,
      opacity: 0.34,
    });
    const orbMesh = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.add(orbMesh);

    const coreGeometry = new THREE.SphereGeometry(0.76, 40, 40);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8d2ff,
      transparent: true,
      opacity: 0.72,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    orb.add(core);

    const wireGeometry = new THREE.IcosahedronGeometry(1.5, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xa9b8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    orb.add(wire);

    const ringGeometry = new THREE.TorusGeometry(1.85, 0.012, 8, 160);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xb9c6ff,
      transparent: true,
      opacity: 0.42,
    });

    const ringOne = new THREE.Mesh(ringGeometry, ringMaterial);
    ringOne.rotation.x = Math.PI * 0.5;
    orb.add(ringOne);

    const ringTwo = new THREE.Mesh(ringGeometry.clone(), ringMaterial.clone());
    ringTwo.rotation.x = Math.PI * 0.32;
    ringTwo.rotation.z = Math.PI * 0.18;
    orb.add(ringTwo);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.7 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xb9c6ff,
      size: 0.022,
      transparent: true,
      opacity: 0.5,
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
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (time: number) => {
      if (disposed) return;
      pointer.lerp(target, 0.055);

      const idleY = time * 0.00018;
      orb.rotation.y = idleY + pointer.x * 0.16;
      orb.rotation.x = Math.sin(time * 0.00022) * 0.08 + pointer.y * 0.1;
      ringOne.rotation.z = time * 0.00022;
      ringTwo.rotation.y = time * -0.00016;
      ringTwo.rotation.x = Math.PI * 0.32 + pointer.y * 0.08;
      particles.rotation.y = time * 0.000018;
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
      orbGeometry.dispose();
      orbMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringTwo.geometry.dispose();
      (ringTwo.material as THREE.Material).dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="three-field" aria-hidden="true" />;
}
