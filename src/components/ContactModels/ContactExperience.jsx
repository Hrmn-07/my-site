import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import ContactLights from "./ContactLights";
import { Phone } from "./Phone";

const ContactExperience = () => {
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Canvas camera={{ position: [5, 10, 10], fov: 50 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={10}
        minDistance={550}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        autoRotateSpeed={5}
      />

      <ContactLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [-30, -120, 0] : [-40, -50, 30]}
      >
        <Phone />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
