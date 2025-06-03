import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit My Site</a>
        </div>
        <div className="flex items-center gap-7 bg-[#d9ecff]/60 rounded-xl max-w-xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hermanus.rmp@gmail.com&su=Hello%20from%20your%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center text-gray-800 hover:text-blue-700 cursor-pointer transition-all hover:scale-110 duration-200"
          >
            <Mail className="w-6 h-6" />
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
            <Github className="w-6 h-6" />
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
            <Linkedin className="w-6 h-6" />
            <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
              Linkedin
            </span>
          </a>
          <a
            href="/Hermanus-Rumapea-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center"
          >
            <img
              src="/images/resume.png"
              alt="resume"
              className="w-6 h-6 group-hover:scale-110 transition-all duration-200"
            />
            <span className="absolute top-full mt-2 text-sm text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
              Resume
            </span>
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Hermanus Rumapea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
