import TitleHeader from "../components/TitleHeader";
import { logoIconsList } from "../constanst";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative scroll-mt-24" id="skills">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <TitleHeader sub="Technologies I've Worked With" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {/* first set of logos */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`first-${index}`} icon={icon} />
          ))}

          {/* duplicate set of logos for seamless looping */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`second-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
