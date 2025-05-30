import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left section */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper hover:scale-105 transition-all duration-300 cursor-pointer">
              <a href="https://github.com/Hrmn-07/explorama" target="_blank">
                <img src="/images/explorama-edit.png" alt="explorama" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Create your own Personal Trip Itineraries by AI with{" "}
                <span className="text-blue-700">Explorama</span>
              </h2>
              <p className="text-black md:text-xl">
                Explorama is an AI powered travel agency site using Typescript,
                React, Vite, Tailwind, and Appwrite
              </p>
            </div>
          </div>
          {/* right section */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper border-4 border-zinc-900 rounded-xl bg-white">
                <a href="https://github.com/Hrmn-07/shopset" target="_blank">
                  <img src="/images/shopset.png" alt="shopset" />
                </a>
                <p className="text-black md:text-xl font-semibold py-2">
                  <span className="text-blue-700">Shopset</span> - Ecommerce App
                </p>
                <p className="text-sm text-black">
                  Typescript, React, Next.js, CMS, Clerk, Zustand, Tailwind
                </p>
              </div>
            </div>
            <div className="project pt-10" ref={project3Ref}>
              <div className="image-wrapper border-4 border-zinc-900 rounded-xl bg-white">
                <a href="https://github.com/Hrmn-07/movispot" target="_blank">
                  <img src="/images/movispot.png" alt="movispot" />
                </a>
                <p className="text-black md:text-xl font-semibold py-2">
                  <span className="text-blue-700">MoviSpot</span> - Movie App
                </p>
                <p className="text-sm text-black">
                  Typescript, React Native, Expo, Tailwind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
