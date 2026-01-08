import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const SEQUENCE = [
    { hj: '福', en: 'FU' },
    { hj: '祿', en: 'LU' },
    { hj: '壽', en: 'SHOU' }
];

const CoinBody = () => {
    const coinDiscRef = useRef<THREE.Group>(null);
    const [index, setIndex] = useState(0);
    const lastRotation = useRef(0);

    useFrame((state, delta) => {
        if (!coinDiscRef.current) return;

        // Rotate only the coin disc
        coinDiscRef.current.rotation.y += delta * 1.2;

        // Switch to the *next* character every 180 degrees.
        // Both sides will show the same index, so viewer sees side1(0), side2(1), side1(2)...
        const currentRotation = coinDiscRef.current.rotation.y;
        if (Math.floor((currentRotation + Math.PI / 2) / Math.PI) > Math.floor((lastRotation.current + Math.PI / 2) / Math.PI)) {
            setIndex((prev) => (prev + 1) % SEQUENCE.length);
        }
        lastRotation.current = currentRotation;
    });

    return (
        <group ref={coinDiscRef}>
            {/* Coin Disc - Color matches stone-950, high metalness */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[1.75, 1.75, 0.15, 64]} />
                <meshPhysicalMaterial
                    color="#111111"
                    metalness={1}
                    roughness={0.02}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    reflectivity={1}
                />
            </mesh>

            {/* Front Side Bilingual Text */}
            <group position={[0, 0, 0.08]}>
                <Text
                    fontSize={0.58}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.08, 0]}
                >
                    {SEQUENCE[index].hj}
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={5}
                        metalness={1}
                        roughness={0}
                    />
                </Text>

                <Text
                    fontSize={0.17}
                    color="#fcd34d"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.35, 0]}
                    letterSpacing={0.2}
                >
                    {SEQUENCE[index].en}
                    <meshStandardMaterial
                        color="#fcd34d"
                        emissive="#b45309"
                        emissiveIntensity={3}
                        metalness={1}
                        roughness={0}
                    />
                </Text>
            </group>

            {/* Back Side Bilingual Text (Showing next in sequence) */}
            <group position={[0, 0, -0.08]} rotation={[0, Math.PI, 0]}>
                <Text
                    fontSize={0.58}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.08, 0]}
                >
                    {SEQUENCE[index].hj}
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={5}
                        metalness={1}
                        roughness={0}
                    />
                </Text>

                <Text
                    fontSize={0.17}
                    color="#fcd34d"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.35, 0]}
                    letterSpacing={0.2}
                >
                    {SEQUENCE[index].en}
                    <meshStandardMaterial
                        color="#fcd34d"
                        emissive="#b45309"
                        emissiveIntensity={3}
                        metalness={1}
                        roughness={0}
                    />
                </Text>
            </group>
        </group>
    );
};

const Coin3D = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />

                <ambientLight intensity={0.8} />
                <pointLight position={[5, 10, 5]} intensity={100} color="#ffd700" />
                <pointLight position={[-5, 5, 5]} intensity={80} color="#ffffff" />
                <pointLight position={[0, -5, 5]} intensity={50} color="#b45309" />
                <pointLight position={[10, 0, -5]} intensity={40} color="#fbbf24" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <CoinBody />
                </Float>

                <EffectComposer>
                    <Bloom
                        intensity={1.5}
                        luminanceThreshold={0.4}
                        luminanceSmoothing={0.9}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Coin3D;
