import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero3DBackground - Crea un effetto "Liquid Blob" animato in autonomia.
 * Utilizza uno shader personalizzato per la deformazione organica e un effetto Fresnel
 * per un look premium "liquido/vetroso".
 */
const Hero3DBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup Scena
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // -- SHADER PER L'EFFETTO LIQUIDO (BLOB) --
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      uniform float uTime;

      // Simplex 3D Noise
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      float snoise(vec3 v){
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 1.0/7.0;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        vNormal = normalMatrix * normal;

        // Deformazione multi-layer
        float noise1 = snoise(position * 0.8 + uTime * 0.3);
        float noise2 = snoise(position * 1.2 - uTime * 0.15) * 0.5;
        float combinedNoise = noise1 + noise2;

        vec3 newPosition = position + normal * combinedNoise * 0.35;
        vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
        vViewPosition = -mvPosition.xyz;

        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      uniform float uTime;
      uniform vec3 uColorA; // Slime Lime
      uniform vec3 uColorB; // Purple

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Effetto Fresnel per bordi luminosi
        float fresnel = pow(1.0 - dot(normal, viewDir), 2.5);

        // Gradiente dinamico
        float mixFactor = dot(normal, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
        mixFactor = clamp(mixFactor + sin(uTime * 0.15) * 0.1, 0.0, 1.0);

        vec3 baseColor = mix(uColorA, uColorB, mixFactor);

        // Aggiunge profondità con il Fresnel
        vec3 finalColor = mix(baseColor, vec3(1.0), fresnel * 0.4);

        // Specular highlight sottile
        float spec = pow(max(dot(reflect(-viewDir, normal), vec3(0.0, 1.0, 0.0)), 0.0), 16.0);
        finalColor += spec * 0.2;

        gl_FragColor = vec4(finalColor, 0.65);
      }
    `;

    // Gabbia invisibile per il contenimento
    const boxSize = 12;
    const geometryBox = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const materialBox = new THREE.MeshBasicMaterial({ visible: false });
    const box = new THREE.Mesh(geometryBox, materialBox);
    scene.add(box);

    // Geometria Blob
    const radius = 2.2;
    const geometryBlob = new THREE.SphereGeometry(radius, 128, 128);

    const materialBlob = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color(0xABF710) }, // Slime Lime
        uColorB: { value: new THREE.Color(0x9B5CFF) }, // Purple
      }
    });

    const blob = new THREE.Mesh(geometryBlob, materialBlob);
    scene.add(blob);

    camera.position.z = 15;

    // Movimento Autonomo
    let velocity = new THREE.Vector3(0.02, 0.03, 0.015);
    const limit = boxSize / 2 - radius;

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      materialBlob.uniforms.uTime.value = elapsedTime;

      // Rimbalzo
      blob.position.add(velocity);
      if (blob.position.x > limit || blob.position.x < -limit) velocity.x *= -1;
      if (blob.position.y > limit || blob.position.y < -limit) velocity.y *= -1;
      if (blob.position.z > limit || blob.position.z < -limit) velocity.z *= -1;

      // Rotazioni lente
      blob.rotation.y += 0.003;
      blob.rotation.x += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometryBox.dispose();
      materialBox.dispose();
      geometryBlob.dispose();
      materialBlob.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: -1 }}
    />
  );
};

export default Hero3DBackground;
