import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Khalil Bouhlel",
  initials: "KB",
  url: "https://Bouhlel.io",
  location: "Ben arous, Tunisia",
  locationLink: "https://maps.app.goo.gl/XdvawQCGJinNcXsa9",
  description:
    "your favorite hyper energized developer ",
  summary:
    "I’m a creative problem-solver, always thinking of new ways to approach challenges. I just graduated, and now I’m in the grind of trying to land my first real developer job. Being entry-level isn’t easy—balancing learning new things, applying to jobs, and waiting for that call. But even though it’s been a hustle, I know I’ve got the skills and passion to make something happen. It’s just about finding the right fit and sticking with it. I’m ready for whatever comes next.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Node.js",
    "Javacript",
    "Java",
    "SpringBoot",
    "Angular",
    "Laravel",
    "Php",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "bouhlelkhalil21@gmail.com",
    tel: "+21698730340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khalilbouhlel1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/khalil-bouhlel",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/khalil_bouhlel",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bouhlelkhalil21@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    whatsapp: {
      name: "Send Email",
      url: "",
      icon: Icons.whatsapp,

      navbar: false,
    },
    },
  },

  work: [
    {
      company: "1waydev",
      href: "https://1waydev.com/",
      badges: [],
      location: "Hybrid",
      title: "Intership",
      logoUrl: "/1waycom_logo.jpeg",
      start: "July 2022",
      end: "Aug 2022",
      description:
        "Developed a gig hunting and hiring platform using Laravel, designed to connect freelancers with potential employers. The platform features a streamlined user experience, allowing gig hunters to easily find job opportunities, while employers can post listings and manage applications. It includes secure user authentication, job management, and profile customization functionalities, all within a responsive and mobile-friendly interface.    ",
    },
    {
      company: "INNOVUP",
      badges: [],
      href: "https://www.innovup.com.tn",
      location: "Remote",
      title: "Intership",
      logoUrl: "/images.png",
      start: "Jan 2023",
      end: "Jui 2023",
      description:
        "Developed a comprehensive online training platform using Laravel, with multi-authentication and responsive design to ensure seamless access across devices. Created a mobile app using the Ionic framework (based on Angular) that serves as a community forum where students can communicate and support each other. The platform features role based access for users (students, instructors, admins) and provides a responsive, mobile-first experience for easy course management and progress tracking.",
    },
  ],
  education: [
    {
      school: "Institut Superieur d'informatique EL Kef",
      href: "http://www.isikef.rnu.tn/Fr/accueil_46_4",
      degree: "License en science informatique, Specialité:Multimedia",
      logoUrl: "/isikef.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "StudyON",
      href: "",
      dates: "Jan 2023 - Juin 2024",
      active: true,
      description:
        "a comprehensive online training platform using Laravel, with multi-authentication and responsive design to ensure seamless access across devices",
      technologies: [
        "Laravel",
        "Php",
        "CSS",
        "Bootstrap",
        "Mysql",
      ],
      image: "",
      video:
        "/projectvid.mp4",
    },
    {
      title: "Readsy",
      href: "",
      dates: "Oct 2024",
      active: true,
      description:
        "Readsy is an innovative online library platform designed to provide users with a seamless reading experience. It offers a vast collection of digital books across various genres, allowing users to easily search, read, and manage their personal library. The platform features a user-friendly interface with advanced search capabilities, personalized recommendations, and a responsive design that ensures accessibility across all devices. Additionally, Readsy supports community engagement through book reviews and discussion forums, fostering a vibrant reading community.",
      technologies: [
        "React",
        "Tailwindcss",
      ],
      image: "",
      video: "/Recording 2024-10-19 111238.mp4", // Ensure this path is correct
    },
    {
      title: "MoviesHere",
      href: "",
      dates: "Sept 2024",
      active: true,
      description:
        "MoviesHere is a platform that allows users to search for movies and watch them online. It provides a user-friendly interface with a comprehensive search feature, enabling users to easily find and stream their favorite movies.",
      technologies: [
        "React",
        "css",
        "JavaScript",
      ],
      image: "",
      video: "/MoviesHere.mp4", // Ensure this path is correct
    },
  ],
} as const;
