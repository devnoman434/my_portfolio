import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const CyberCircuit = () => {
  const groupRef = useRef();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const scrollY = scrollRef.current;
      
      // Slowly rotate the entire circuit board structure for a 3D parallax effect
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      groupRef.current.rotation.x = scrollY * 0.0002;

      // Calculate the extension length of the central line based on scroll
      const scrollFactor = scrollY * 0.015; // Grows much faster
      const spineHeight = Math.max(0.1, scrollFactor);

      // Access the central spine mesh (first child)
      const spineMesh = groupRef.current.children[0];
      spineMesh.scale.y = spineHeight;
      spineMesh.position.y = -spineHeight / 2;

      // Animate the branches (children 1 to 30)
      for (let i = 0; i < 30; i++) {
        const branchGroup = groupRef.current.children[i + 1];
        const branchY = -i * 0.8; 
        const isReached = -branchY < spineHeight;
        const branchProgress = Math.min(Math.max((spineHeight - (-branchY)) * 2, 0), 1);
        
        const baseWidth = 1.8 + Math.sin(i * 45) * 1.5;
        const currentWidth = isReached ? baseWidth * branchProgress : 0.001;
        
        // branch line (child 0)
        const branchLine = branchGroup.children[0];
        branchLine.scale.x = currentWidth;
        branchLine.position.x = (i % 2 === 0 ? 1 : -1) * (currentWidth / 2);
        branchLine.material.opacity = isReached ? 0.9 : 0;
        branchLine.material.emissiveIntensity = isReached ? 2 : 0;

        // branch node (child 1)
        const branchNode = branchGroup.children[1];
        branchNode.scale.setScalar(isReached ? branchProgress : 0.001);
        branchNode.position.x = (i % 2 === 0 ? 1 : -1) * currentWidth;
        branchNode.material.opacity = isReached ? 1 : 0;
        branchNode.material.emissiveIntensity = isReached ? 3 : 0;
      }
    }
  });

  return (
    // Lowered top position & moved closer to camera for massive visibility
    <group ref={groupRef} position={[0, 2.5, -1]}>
      {/* Central Vertical Neon Line extending on scroll */}
      <mesh>
        {/* We scale this mesh dynamically in useFrame, so starting args are 1 for height */}
        <cylinderGeometry args={[0.06, 0.06, 1, 8]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3} />
      </mesh>

      {/* Horizontal Circuit Branches */}
      {Array.from({ length: 30 }).map((_, i) => {
        const branchY = -i * 0.8; 
        return (
          <group key={i} position={[0, branchY, 0]}>
            {/* The horizontal line */}
            <mesh>
              <boxGeometry args={[1, 0.04, 0.04]} />
              <meshStandardMaterial color="#ff0055" emissive="#ff0055" transparent opacity={0} />
            </mesh>
            {/* Node at the end of the branch */}
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" transparent opacity={0} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 2, 12]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#00f0ff" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1.5} />
        <CyberCircuit />
      </Canvas>
    </div>
  );
};

export default Background3D;
