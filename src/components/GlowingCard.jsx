import { useRef } from "react";

const GlowingCard = ({ card, children, index }) => {
  const cardRef = useRef([]);

  const handleMouseMovement = (index) => (e) => {
    const card = cardRef.current[index];
    if (!card) return;

    // read the mouse position on card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle of the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={handleMouseMovement(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="card-inner" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-gray-800 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowingCard;
