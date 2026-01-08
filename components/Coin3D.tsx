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

    useFrame((state) => {
        if (!meshRef.current) return;

        // Constant rotation
        meshRef.current.rotation.y += 0.015;

        // Switch Hanja when the back is facing the camera (approx every 180 degrees)
        const currentRotation = meshRef.current.rotation.y;
        if (Math.floor(currentRotation / Math.PI) > Math.floor(lastRotation.current / Math.PI)) {
            setIndex((prev) => (prev + 1) % HANJA_SEQUENCE.length);
        }
        lastRotation.current = currentRotation;
    });

    return (
        <group ref={meshRef}>
            {/* Coin Disc */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[2.5, 2.5, 0.2, 64]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.9}
                    roughness={0.15}
                    envMapIntensity={1}
                />
            </mesh>

            {/* Outer Rim (Gold) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 0.08, 16, 100]} />
                <meshStandardMaterial
                    color="#f59e0b"
                    metalness={1}
                    roughness={0.1}
                    emissive="#78350f"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Front Side Hanja */}
            <Text
                position={[0, 0, 0.11]}
                fontSize={1.8}
                color="#fbbf24"
                anchorX="center"
                anchorY="middle"
            >
                {HANJA_SEQUENCE[index]}
                <meshStandardMaterial
                    color="#fbbf24"
                    emissive="#f59e0b"
                    emissiveIntensity={2}
                    metalness={1}
                    roughness={0}
                />
            </Text>

            {/* Back Side Hanja (Same or different, we show front usually) */}
            <Text
                position={[0, 0, -0.11]}
                rotation={[0, Math.PI, 0]}
                fontSize={1.8}
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
                        intensity={1.5}
                        luminanceThreshold={0.5}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Coin3D;
