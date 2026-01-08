import React, { useRef, useState, useMemo } from 'react';
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
    const meshRef = useRef<THREE.Mesh>(null);
    const [index, setIndex] = useState(0);
    const lastRotation = useRef(0);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Maintain premium rotation speed
        meshRef.current.rotation.y += delta * 1.2;

        // Switch to next character pair when the coin is edge-on (every 180 degrees)
        const currentRotation = meshRef.current.rotation.y;
        if (Math.floor((currentRotation + Math.PI / 2) / Math.PI) > Math.floor((lastRotation.current + Math.PI / 2) / Math.PI)) {
            setIndex((prev) => (prev + 1) % SEQUENCE.length);
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


            {/* 
                Text Group - Decoupled or carefully switched to stay 'upright'
                We only show text when the front of the coin is facing the user.
                This satisfies "정자(upright char)만 보이게 해줘"
            */}
            <group
                position={[0, 0, 0.08]}
                visible={Math.cos(meshRef.current?.rotation.y || 0) > 0}
            >
                {/* Hanja Character - 0.84 size (30% reduction from 1.2) */}
                <Text
                    fontSize={0.84}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.1, 0]}
                    font="https://fonts.gstatic.com/s/notoserifkr/v32/3q6u9pPC88qIk9L-Sntv_G9u2WfWvWvW.woff" // Attempt serif again for sharpness
                >
                    {SEQUENCE[index].hj}
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={4}
                        metalness={1}
                        roughness={0}
                    />
                </Text>

                {/* English Name - Small and crisp below Hanja */}
                <Text
                    fontSize={0.25}
                    color="#fcd34d"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.5, 0]}
                    letterSpacing={0.2}
                >
                    {SEQUENCE[index].en}
                    <meshStandardMaterial
                        color="#fcd34d"
                        emissive="#b45309"
                        emissiveIntensity={2}
                        metalness={1}
                        roughness={0}
                    />
                </Text>
            </group>

            {/* Mirror text for the back side to maintain 3D volume, 
                but we only care about the front being 'upright' */}
            <group
                position={[0, 0, -0.08]}
                rotation={[0, Math.PI, 0]}
                visible={Math.cos(meshRef.current?.rotation.y || 0) <= 0}
            >
                <Text
                    fontSize={0.84}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.1, 0]}
                >
                    {SEQUENCE[(index + 1) % SEQUENCE.length].hj}
                    <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={4} />
                </Text>
                <Text
                    fontSize={0.25}
                    color="#fcd34d"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.5, 0]}
                    letterSpacing={0.2}
                >
                    {SEQUENCE[(index + 1) % SEQUENCE.length].en}
                    <meshStandardMaterial color="#fcd34d" emissive="#b45309" emissiveIntensity={2} />
                </Text>
            </group>
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
