const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 900, suffix: "+", label: "Hours of Coding" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 900, suffix: "+", label: "Coffee Consumed" }, //i tried to count,
];

const logoIconsList = [
  {
    imgPath: "/images/logos/sanity-logo.svg",
  },
  {
    imgPath: "/images/logos/vercel-logo.png",
  },
  {
    imgPath: "/images/logos/docker-logo.png",
  },
  {
    imgPath: "/images/logos/typescript-logo.webp",
  },
  {
    imgPath: "/images/logos/reactjs-logo.png",
  },
  {
    imgPath: "/images/logos/tailwind-logo.png",
  },
  {
    imgPath: "/images/logos/nextjs-logo.png",
  },
  {
    imgPath: "/images/logos/nodejs-logo.webp",
  },
  {
    imgPath: "/images/logos/github-logo.png",
  },
  {
    imgPath: "/images/logos/expo-logo.png",
  },
  {
    imgPath: "/images/logos/golang-logo.png",
  },
  {
    imgPath: "/images/logos/appwrite-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Analyzing challenges and implementing effective solutions to overcome technical and project roadblocks.",
  },
  {
    imgPath: "/images/collab.png",
    title: "Team Collaboration",
    desc: "Working closely with cross-functional teams to achieve shared goals and ensure smooth workflows.",
  },
  {
    imgPath: "/images/time.png",
    title: "Time Management",
    desc: "Efficiently prioritizing tasks to meet deadlines without compromising code quality or project scope.",
  },
];

const expCards = [
  {
    review:
      "With Explorama, Herman built a smart, AI-powered travel dashboard that simplified the trip planning process while delivering rich data insights through a seamless UI.",
    logoPath: "/images/explogo1.png",
    title: "Full Stack Developer – Explorama",
    date: "April 2025",
    responsibilities: [
      "Created a full-featured dashboard for a travel agency with AI-generated personalized travel plans based on user input.",
      "Integrated Appwrite for authentication, real-time database operations, and user management.",
      "Designed and styled an intuitive admin interface with Tailwind CSS, including interactive charts and data visualizations for monitoring user activity and travel trends.",
    ],
  },
  {
    review:
      "Through Shopset, Herman demonstrated his ability to build scalable, responsive e-commerce applications with modern tech stacks. His focus on user experience and code maintainability stood out.",
    logoPath: "/images/explogo2.png",
    title: "Full Stack Developer – Shopset",
    date: "January 2025",
    responsibilities: [
      "Developed a fully functional e-commerce platform using Next.js App Router, featuring product browsing and client-side cart functionality.",
      "Implemented user authentication and session management with Clerk, and integrated Sanity CMS for dynamic product content.",
      "Managed global state using Zustand and styled the UI with Tailwind CSS to deliver a fast and responsive user experience.",
    ],
  },
  {
    review:
      "Herman consistently demonstrated professionalism and adaptability during his time at Hilton Anatole. His ability to thrive in a fast-paced, structured environment and collaborate effectively with the team made him a valuable contributor.",
    logoPath: "/images/explogo3.png",
    title: "Hospitality Intern",
    date: "July 2023 - July 2024",
    responsibilities: [
      "Participated in daily operations at a five-star hotel, developing strong time management and problem-solving skills.",
      "Adapted quickly to new tasks and procedures within a structured hospitality environment.",
      "Collaborated with cross-functional teams to ensure smooth service delivery and guest satisfaction.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  navLinks,
};
