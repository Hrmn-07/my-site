// minute 2:17:20
import GlowingCard from "../components/GlowingCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constanst";

const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="w-full mt-20 md:mt-40 section-padding xl:px-0"
    >
      <div className="w-full h-full px-5 md:px-20">
        <TitleHeader
          title="Work / Project Experience"
          sub="My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowingCard card={card} index={index} />
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-gray-800">► {card.date}</p>
                        <p className="text-gray-800 italic">Responsibilities</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-gray-800">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
