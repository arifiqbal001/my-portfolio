'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh1Ref.current) {
      mesh1Ref.current.rotation.x += 0.005;
      mesh1Ref.current.rotation.y += 0.005;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x -= 0.003;
      mesh2Ref.current.rotation.y -= 0.004;
    }
  });

  useEffect(() => {
    if (!groupRef.current) return;
    
    groupRef.current.position.set(3, 0, 0);

    const matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 768px)", () => {
      gsap.to(groupRef.current!.position, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "1000px top",
          scrub: 1,
        },
        y: -5,
        x: -2,
        z: -2,
      });
      
      gsap.to(groupRef.current!.position, {
        scrollTrigger: {
          trigger: "body",
          start: "1000px top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: -15,
        x: 2,
        rotationZ: Math.PI,
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron ref={mesh1Ref} args={[1.5, 0]} position={[0, 1, 0]}>
          <MeshDistortMaterial 
            color="#22c55e" 
            emissive="#0B2A1E"
            distort={0.3} 
            speed={2} 
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Icosahedron>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Icosahedron ref={mesh2Ref} args={[0.8, 0]} position={[-2, -1, 1]}>
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.1}
            metalness={0.9}
            envMapIntensity={1}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="city" />
      <FloatingShapes />
    </Canvas>
  );
}
