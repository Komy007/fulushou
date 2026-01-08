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

        // Switch character when the side is facing the camera
        const currentRotation = coinDiscRef.current.rotation.y;
        if (Math.floor((currentRotation + Math.PI / 2) / Math.PI) > Math.floor((lastRotation.current + Math.PI / 2) / Math.PI)) {
            setIndex((prev) => (prev + 1) % SEQUENCE.length);
        }
        lastRotation.current = currentRotation;
    });

    return (
        <group>
            {/* Rotating Coin Disc Group */}
            <group ref={coinDiscRef}>
                {/* Coin Disc - Reduced size by 30% */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[1.75, 1.75, 0.15, 64]} />
                    <meshStandardMaterial
                        color="#050505"
                        metalness={1}
                        roughness={0.02}
                        envMapIntensity={2.5}
                    />
                </mesh>

                {/* Subtle Inner Rim to give depth */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.65, 0.02, 16, 100]} />
                    <meshStandardMaterial color="#ffd700" metalness={1} roughness={0} />
                </mesh>
            </group>

            {/* 
                Static Text Layer - Stays upright and front-facing
                We pulse the opacity slightly when the coin is edge-on to 'hide' the switch.
            */}
            <group position={[0, 0, 0.1]}>
                {/* Hanja Character - Sharp and upright */}
                <Text
                    fontSize={0.84}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.1, 0]}
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

                {/* English Name - Below and crisp */}
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
        </group >
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

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <CoinBody />
                    </Float>

                    <EffectComposer>
                        <Bloom
                            intensity={1.5}
                            luminanceThreshold={0.4}
                            luminanceSmoothing={0.9}
                            mipmapBlur
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Coin3D;
