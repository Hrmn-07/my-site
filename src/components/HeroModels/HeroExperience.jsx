import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import { BitDJ } from "./BitDJ";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Canvas camera={{ position: [30, 20, 25], fov: 50 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={10}
        minDistance={550}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={5}
      />

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [-30, -120, 0] : [-30, -30, 0]}
      >
        <BitDJ />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
