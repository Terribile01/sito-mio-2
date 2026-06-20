import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3DBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cubo (Contenitore) - Cyan (#00F5FF)
    const boxSize = 10;
    const geometryBox = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const materialBox = new THREE.MeshBasicMaterial({
      color: 0x00F5FF,
      wireframe: true,
      transparent: true,
      opacity: 0.15, // Reduced opacity for background use
    });
    const box = new THREE.Mesh(geometryBox, materialBox);
    scene.add(box);

    // Sfera (Il nostro oggetto) - Purple (#9B5CFF)
    const radius = 0.8;
    const geometrySphere = new THREE.SphereGeometry(radius, 32, 32);
    const materialSphere = new THREE.MeshPhongMaterial({
      color: 0x9B5CFF,
      shininess: 100,
      emissive: 0x9B5CFF,
      emissiveIntensity: 0.2,
    });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    scene.add(sphere);

    // Luce
    const light = new THREE.PointLight(0xffffff, 1.5, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    camera.position.z = 15;

    // Fisica semplice
    let velocity = new THREE.Vector3(0.06, 0.08, 0.05); // Slightly slower for background
    const limit = boxSize / 2 - radius;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Aggiorna posizione
      sphere.position.add(velocity);

      // Controllo collisioni
      if (sphere.position.x > limit || sphere.position.x < -limit) velocity.x *= -1;
      if (sphere.position.y > limit || sphere.position.y < -limit) velocity.y *= -1;
      if (sphere.position.z > limit || sphere.position.z < -limit) velocity.z *= -1;

      // Gentle rotation of the container box
      box.rotation.y += 0.002;
      box.rotation.x += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometryBox.dispose();
      materialBox.dispose();
      geometrySphere.dispose();
      materialSphere.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
};

export default Hero3DBackground;
