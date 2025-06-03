import { useEffect, useState } from "react";
import { navLinks } from "../constanst";

const NavBar = () => {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setscrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a
          href="#hero"
          className="group flex items-center font-semibold text-xl text-gray-800 overflow-hidden"
        >
          <span>Hermanus</span>
          <span className="ml-2 inline-block max-w-0 overflow-hidden whitespace-nowrap text-blue-700 transition-all duration-300 group-hover:max-w-[8rem]">
            Rumapea
          </span>
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span className="font-semibold">{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
