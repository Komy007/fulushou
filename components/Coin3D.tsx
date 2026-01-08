import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const HANJA_SEQUENCE = ['福', '祿', '壽'];

const CoinBody = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [index, setIndex] = useState(0);
    const lastRotation = useRef(0);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Smoother, slightly slower rotation for premium feel
        meshRef.current.rotation.y += delta * 0.8;

        // Switch Hanja when the coin is edge-on to the camera (PI/2, 3PI/2, etc.)
        // This ensures the user doesn't see the text "flip" while facing them.
        const currentRotation = meshRef.current.rotation.y;
        if (Math.floor((currentRotation + Math.PI / 2) / Math.PI) > Math.floor((lastRotation.current + Math.PI / 2) / Math.PI)) {
            setIndex((prev) => (prev + 1) % HANJA_SEQUENCE.length);
        }
        lastRotation.current = currentRotation;
    });

    return (
        <group ref={meshRef}>
            {/* Coin Disc - Reduced size by 30% (2.5 -> 1.75) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[1.75, 1.75, 0.15, 64]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    metalness={1}
                    roughness={0.05}
                    envMapIntensity={2}
                />
            </mesh>


            {/* Front Side Hanja - Reduced size (1.8 -> 1.2) */}
            <Text
                position={[0, 0, 0.08]}
                fontSize={1.2}
                color="#fbbf24"
                anchorX="center"
                anchorY="middle"
            >
                {HANJA_SEQUENCE[index]}
                <meshStandardMaterial
                    color="#fbbf24"
                    emissive="#f59e0b"
                    emissiveIntensity={3}
                    metalness={1}
                    roughness={0}
                />
            </Text>

            {/* Back Side Hanja - Reduced size */}
            <Text
                position={[0, 0, -0.08]}
                rotation={[0, Math.PI, 0]}
                fontSize={1.2}
                color="#fbbf24"
                anchorX="center"
                anchorY="middle"
            >
                {HANJA_SEQUENCE[(index + 1) % HANJA_SEQUENCE.length]}
                <meshStandardMaterial
                    color="#fbbf24"
                    emissive="#f59e0b"
                    emissiveIntensity={2}
                    metalness={1}
                    roughness={0}
                />
            </Text>
        </group>
    );
};

const Coin3D = () => {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />

                {/* Lights */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#fbbf24" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#f59e0b" />

                <Environment preset="night" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <CoinBody />
                </Float>

                {/* Post-processing Bloom for the Premium Glow */}
                <EffectComposer>
                    <Bloom
                        intensity={2.0}
                        luminanceThreshold={0.3}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Coin3D;
