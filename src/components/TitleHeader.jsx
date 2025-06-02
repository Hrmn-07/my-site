const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div
        className="font-semibold text-2xl md:text-4xl text-center text-gray-800"
        style={{ textShadow: "-2px 2px 3px rgba(255, 255, 255, 0.8)" }}
      >
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
