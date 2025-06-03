import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constanst/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/images/grid-bg.png"
          alt="background"
          className=" opacity-20"
        />
      </div>
      <div className="hero-layout">
        {/* hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 style={{ textShadow: "0 3px 3px rgba(90, 90, 90, 0.5)" }}>
                Building{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span
                          style={{
                            textShadow: "0 3px 3px rgba(90, 90, 90, 0.5)",
                          }}
                        >
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 style={{ textShadow: "0 3px 3px rgba(90, 90, 90, 0.5)" }}>
                Into Scalable,
              </h1>
              <h1 style={{ textShadow: "0 3px 3px rgba(90, 90, 90, 0.5)" }}>
                Performant Apps
              </h1>
            </div>
            <div className="z-30 relative md:max-w-xl max-w-xl bg-[#d9ecff]/60 rounded-xl">
              <p
                className="text-gray-800 md:text-xl font-semibold tracking-wide"
                style={{ textShadow: "-2px 2px 3px rgba(255, 255, 255, 0.8)" }}
              >
                Hi, i'm <span className="text-3xl text-blue-700">Herman</span>.
                Full Stack Developer based in Batam, Indonesia with a passion
                for code and design.
              </p>
            </div>
            <div className="flex items-center gap-5 bg-[#d9ecff]/60 rounded-xl max-w-xl">
              <p className="text-gray-800 text-lg">Let's Connect :</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hermanus.rmp@gmail.com&su=Hello%20from%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center text-gray-800 hover:text-blue-700 cursor-pointer transition-all hover:scale-110 duration-200"
              >
                <Mail className="w-7 h-7" />
                <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                  Gmail
                </span>
              </a>
              <a
                href="https://github.com/Hrmn-07"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center text-gray-800 hover:text-blue-700 cursor-pointer transition-all hover:scale-110 duration-200"
              >
                <Github className="w-7 h-7" />
                <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                  Github
                </span>
              </a>
              <a
                href="https://linkedin.com/in/hermanus-rumapea-b4879225a"
                target="_blank"
                rel="noopener noreferrer"
                className=" group relative flex flex-col items-center justify-center text-gray-800 hover:text-blue-700 cursor-pointer transition-all hover:scale-110 duration-200"
              >
                <Linkedin className="w-7 h-7" />
                <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                  Linkedin
                </span>
              </a>
              <a
                href="/Hermanus_Rumapea_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center"
              >
                <img
                  src="/images/resume.png"
                  alt="resume"
                  className="w-8 h-8 group-hover:scale-110 transition-all duration-200"
                />
                <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                  Resume
                </span>
              </a>
            </div>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Works"
            />
          </div>
        </header>
        {/* 3D Model */}
        <figure>
          <div className="hero-3d-layout pointer-events-none hover:cursor-grab">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
