import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ─── Floating Particles ──────────────────────────────────────
const Particles = ({ count = 150, mouse }) => {
    const mesh = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 25;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            speeds[i] = Math.random() * 0.3 + 0.1;
        }

        return { positions, speeds };
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.elapsedTime;

        const positions = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3 + 1] += Math.sin(time * particles.speeds[i] + i) * 0.003;
            positions[i3] += Math.cos(time * particles.speeds[i] * 0.5 + i) * 0.002;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;

        if (mouse.current) {
            mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.current.y * 0.05, 0.02);
            mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, mouse.current.x * 0.05, 0.02);
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#3b82f6"
                transparent opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

// ─── Section config: each section has a geometry + color + label ───
const SECTIONS = [
    {
        id: 'hero',
        geometry: 'torusKnot',    // Complexity / Engineering
        color: '#3b82f6',
        emissive: '#06b6d4',
        label: '{ }',
    },
    {
        id: 'skills',
        geometry: 'dodecahedron',  // Versatility / Many facets
        color: '#8b5cf6',
        emissive: '#a855f7',
        label: '⚡',
    },
    {
        id: 'experience',
        geometry: 'octahedron',    // Growth / Refinement
        color: '#06b6d4',
        emissive: '#22d3ee',
        label: '💎',
    },
    {
        id: 'education',
        geometry: 'icosahedron',   // Knowledge / Completeness
        color: '#10b981',
        emissive: '#34d399',
        label: '🎓',
    },
];

// ─── Single Morphable Shape ──────────────────────────────────
const MorphingShape = ({ mouse, activeSection }) => {
    const groupRef = useRef();
    const meshRefs = useRef([]);
    const currentIdx = SECTIONS.findIndex(s => s.id === activeSection);

    // Create refs for each geometry
    const setMeshRef = useCallback((el, idx) => {
        meshRefs.current[idx] = el;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        const time = state.clock.elapsedTime;

        // Rotate the whole group
        groupRef.current.rotation.x = time * 0.08;
        groupRef.current.rotation.y = time * 0.12;

        // Mouse influence on position
        if (mouse.current) {
            groupRef.current.position.x = THREE.MathUtils.lerp(
                groupRef.current.position.x,
                4.5 + mouse.current.x * 0.4,
                0.02
            );
            groupRef.current.position.y = THREE.MathUtils.lerp(
                groupRef.current.position.y,
                mouse.current.y * 0.3,
                0.02
            );
        }

        // Animate visibility: fade in/out each mesh
        meshRefs.current.forEach((mesh, idx) => {
            if (!mesh) return;
            const isActive = idx === currentIdx;
            const targetScale = isActive ? 1 : 0;
            const targetOpacity = isActive ? 0.18 : 0;

            mesh.scale.x = THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.04);
            mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, targetScale, 0.04);
            mesh.scale.z = THREE.MathUtils.lerp(mesh.scale.z, targetScale, 0.04);

            if (mesh.material) {
                mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacity, 0.04);
            }
        });
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
            <group ref={groupRef} position={[4.5, 0, -3]}>
                {/* TorusKnot — Hero */}
                <mesh ref={(el) => setMeshRef(el, 0)} scale={0}>
                    <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
                    <meshStandardMaterial
                        color={SECTIONS[0].color}
                        wireframe transparent opacity={0}
                        emissive={SECTIONS[0].emissive}
                        emissiveIntensity={0.1}
                    />
                </mesh>

                {/* Dodecahedron — Skills */}
                <mesh ref={(el) => setMeshRef(el, 1)} scale={0}>
                    <dodecahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color={SECTIONS[1].color}
                        wireframe transparent opacity={0}
                        emissive={SECTIONS[1].emissive}
                        emissiveIntensity={0.1}
                    />
                </mesh>

                {/* Octahedron — Experience */}
                <mesh ref={(el) => setMeshRef(el, 2)} scale={0}>
                    <octahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color={SECTIONS[2].color}
                        wireframe transparent opacity={0}
                        emissive={SECTIONS[2].emissive}
                        emissiveIntensity={0.12}
                    />
                </mesh>

                {/* Icosahedron — Education */}
                <mesh ref={(el) => setMeshRef(el, 3)} scale={0}>
                    <icosahedronGeometry args={[1.5, 1]} />
                    <meshStandardMaterial
                        color={SECTIONS[3].color}
                        wireframe transparent opacity={0}
                        emissive={SECTIONS[3].emissive}
                        emissiveIntensity={0.1}
                    />
                </mesh>
            </group>
        </Float>
    );
};

// ─── Secondary smaller shape (left side, also morphs) ─────────
const SecondaryShape = ({ mouse, activeSection }) => {
    const groupRef = useRef();
    const meshRefs = useRef([]);
    const currentIdx = SECTIONS.findIndex(s => s.id === activeSection);

    const setMeshRef = useCallback((el, idx) => {
        meshRefs.current[idx] = el;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        const time = state.clock.elapsedTime;

        groupRef.current.rotation.x = time * -0.06;
        groupRef.current.rotation.y = time * 0.1;
        groupRef.current.rotation.z = time * 0.04;

        if (mouse.current) {
            groupRef.current.position.x = THREE.MathUtils.lerp(
                groupRef.current.position.x,
                -5.5 + mouse.current.x * -0.3,
                0.015
            );
            groupRef.current.position.y = THREE.MathUtils.lerp(
                groupRef.current.position.y,
                -1 + mouse.current.y * -0.2,
                0.015
            );
        }

        meshRefs.current.forEach((mesh, idx) => {
            if (!mesh) return;
            const isActive = idx === currentIdx;
            const targetScale = isActive ? 1 : 0;
            const targetOpacity = isActive ? 0.1 : 0;

            mesh.scale.x = THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.03);
            mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, targetScale, 0.03);
            mesh.scale.z = THREE.MathUtils.lerp(mesh.scale.z, targetScale, 0.03);

            if (mesh.material) {
                mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacity, 0.03);
            }
        });
    });

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
            <group ref={groupRef} position={[-5.5, -1, -4]}>
                {/* Sphere — Hero */}
                <mesh ref={(el) => setMeshRef(el, 0)} scale={0}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0} />
                </mesh>

                {/* Cone — Skills */}
                <mesh ref={(el) => setMeshRef(el, 1)} scale={0}>
                    <coneGeometry args={[1, 2, 6]} />
                    <meshStandardMaterial color="#a855f7" wireframe transparent opacity={0} />
                </mesh>

                {/* Torus — Experience */}
                <mesh ref={(el) => setMeshRef(el, 2)} scale={0}>
                    <torusGeometry args={[1, 0.4, 16, 32]} />
                    <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0} />
                </mesh>

                {/* Tetrahedron — Education */}
                <mesh ref={(el) => setMeshRef(el, 3)} scale={0}>
                    <tetrahedronGeometry args={[1.3, 0]} />
                    <meshStandardMaterial color="#34d399" wireframe transparent opacity={0} />
                </mesh>
            </group>
        </Float>
    );
};

// ─── Connection Lines ─────────────────────────────────────────
const ConnectionLines = () => {
    const lineCount = 10;

    const lines = useMemo(() => {
        const positions = [];
        for (let i = 0; i < lineCount; i++) {
            const x1 = (Math.random() - 0.5) * 20;
            const y1 = (Math.random() - 0.5) * 14;
            const z1 = (Math.random() - 0.5) * 6 - 3;
            const x2 = x1 + (Math.random() - 0.5) * 5;
            const y2 = y1 + (Math.random() - 0.5) * 5;
            const z2 = z1 + (Math.random() - 0.5) * 2;
            positions.push(x1, y1, z1, x2, y2, z2);
        }
        return new Float32Array(positions);
    }, []);

    return (
        <lineSegments>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={lineCount * 2} array={lines} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial color="#3b82f6" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
        </lineSegments>
    );
};

// ─── Scene with section-aware morphing ────────────────────────
const Scene = ({ activeSection }) => {
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />

            <Particles mouse={mouse} />
            <MorphingShape mouse={mouse} activeSection={activeSection} />
            <SecondaryShape mouse={mouse} activeSection={activeSection} />
            <ConnectionLines />
        </>
    );
};

// ─── Main Component ──────────────────────────────────────────
const HeroScene3D = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Intersection Observer to detect which section is in view
    useEffect(() => {
        if (isMobile) return;

        const sectionIds = ['about', 'skills', 'experience', 'education'];
        const sectionMap = {
            'about': 'hero',
            'skills': 'skills',
            'experience': 'experience',
            'education': 'education',
        };

        const observers = [];

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    const mapped = sectionMap[entry.target.id];
                    if (mapped) setActiveSection(mapped);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: [0.3, 0.5],
            rootMargin: '-10% 0px -10% 0px',
        });

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div
            className="fixed inset-0 z-0"
            style={{ pointerEvents: 'none', width: '100vw', height: '100vh', top: 0, left: 0 }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                style={{ pointerEvents: 'auto' }}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene activeSection={activeSection} />
            </Canvas>
        </div>
    );
};

export default HeroScene3D;
