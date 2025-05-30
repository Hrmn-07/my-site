import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
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
              <h1>
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
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Scalable,</h1>
              <h1>Performant Apps</h1>
            </div>
            <div className="z-30 relative md:max-w-xl max-w-xl bg-[#d9ecff]/60 rounded-xl">
              <p className="text-black md:text-xl font-semibold tracking-wide">
                Hi, i'm <span className="text-3xl text-blue-700">Herman</span>.
                Full Stack Developer based in Batam, Indonesia with a passion
                for code and design.
              </p>
            </div>
            <div className="flex items-center gap-5 bg-[#d9ecff]/60">
              <p className="text-black text-lg">Let's connect :</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hermanus.rmp@gmail.com&su=Hello%20from%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 cursor-pointer transition-all"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/Hrmn-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 cursor-pointer transition-all"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/hermanus-rumapea-b4879225a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 cursor-pointer transition-all"
              >
                <Linkedin className="w-7 h-7" />
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
          <div className="hero-3d-layout pointer-events-none">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
