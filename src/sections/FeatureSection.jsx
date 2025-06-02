import { abilities } from "../constanst";

const FeatureSection = () => {
  return (
    <div className="w-full padding-x-lg pt-1">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-7 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-black/90 text-xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-black/90 text-base tracking-wide">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
