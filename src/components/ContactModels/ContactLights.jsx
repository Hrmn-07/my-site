const ContactLights = () => {
  return (
    <>
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc0f0"
      />
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[-10, 10, 10]} intensity={3} />
      <directionalLight position={[0, 5, -10]} intensity={3} />
    </>
  );
};

export default ContactLights;
