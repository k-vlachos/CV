export default {
  role: "Full Stack Developer",
  nav: {
    github: "GitHub",
    email: "Email"
  },
  sections: {
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects"
  },
  experience: [
    {
      company: "C.I.T.E",
      role: "Full Stack Developer",
      duration: "18 months",
      description: "Developed a project called OpenCDMP from the ground up. Built full stack features, integrated multiple APIs and gained experience in delivering production-ready software.",
      route: "/experience/cite"
    },
    {
      company: "Cobalt Fairy",
      role: "Frontend Developer",
      duration: "6 months · Part time",
      description: "Built the UI for an upcoming mail provider application using React. Responsible for designing and implementing the full front end of the product.",
      route: "/experience/cobalt-fairy"
    },
    {
      company: "OTE",
      role: "Telecommunications Technician",
      duration: "6 months · Internship",
      description: "Troubleshot wired network issues as part of the telecommunications team. Gained hands-on experience in network infrastructure and problem solving.",
      route: "/experience/ote"
    }
  ],
  education: [
    {
      institution: "University of Peloponnese",
      degree: "BSc Programming and Telecommunications",
      status: "In progress"
    },
    {
      institution: "English Language Certificate",
      degree: "English Proficiency Degree",
      status: "Completed"
    }
  ],
  projects: [
    {
      name: "Employee Map",
      description: "A web app that displays employees and their locations, integrated with Google Maps to show routes for each employee."
    },
    {
      name: "Discord Bot",
      description: "A custom Discord bot built from scratch with various automation and utility features."
    },
    {
      name: "Raspberry Pi Server",
      description: "Self-hosted various services on a Raspberry Pi including game servers and web applications, exploring networking and self-hosting concepts."
    }
  ],
  experiencePages: {
    cite: {
      role: "Full Stack Developer",
      duration: "18 months",
      overview: "Worked as a Full Stack Developer at C.I.T.E for 18 months, contributing to the development of OpenCDMP — an open-source platform for managing Data and Software Management Plans. Joined from the very first release (v1.0.0) and contributed through to v1.3.0, gaining experience in the full software development lifecycle from initial architecture to production releases.",
      whatIDid: "What I Did",
      items: [
        "Built and maintained full stack features using Java / Spring Boot on the backend and Angular on the frontend",
        "Created new projects and modules from scratch within the OpenCDMP ecosystem",
        "Integrated multiple external APIs into the platform",
        "Debugged and resolved complex issues across the full stack",
        "Contributed across releases from v1.0.0 through v1.3.0",
        "Learned how to think and work as a professional developer in a real team environment"
      ],
      technologies: "Technologies",
      project: "Project",
      projectDescription: "An open and extensible platform for managing Output Management Plans such as Data Management Plans and Software Management Plans. Built with a microservices architecture using Spring Boot, Angular, PostgreSQL, RabbitMQ and Elasticsearch.",
      viewOnGithub: "View on GitHub →",
      overview_title: "Overview",
      back: "← Back"
    },
    cobaltFairy: {
      role: "Frontend Developer",
      duration: "6 months · Part time",
      overview_title: "Overview",
      overview: "Worked part time at Cobalt Fairy for 6 months as a Frontend Developer, responsible for building the entire UI of an upcoming mail provider application from scratch. Was given Figma design templates and tasked with replicating them in React while making them fully interactive and functional.",
      whatIDid: "What I Did",
      items: [
        "Built the Login, Register and Forgot Password screens with full implementation",
        "Developed the main Dashboard from scratch based on Figma designs",
        "Translated Figma templates into pixel perfect interactive React components",
        "Handled the full frontend architecture of the project from day one"
      ],
      technologies: "Technologies",
      back: "← Back"
    },
    ote: {
      role: "Telecommunications Technician",
      duration: "6 months · Internship",
      overview_title: "Overview",
      overview: "Completed a 6 month internship at OTE, Greece's largest telecommunications provider, working as a field technician. Visited customers' homes to diagnose and resolve wired network connectivity issues across a range of technologies.",
      whatIDid: "What I Did",
      items: [
        "Visited customer premises to diagnose and fix wired network connection problems",
        "Worked with Copper Cable solutions and Fibre to the Home (FTTH) installations",
        "Maintained and repaired ADSL, VDSL and Vectoring connections",
        "Handled Last Drop installations and maintenance",
        "Managed Cabinet DSLAMs including replacement of network cards",
        "Trained in telecommunications infrastructure and field operations"
      ],
      technologies: "Technologies & Skills",
      back: "← Back"
    }
  }
  
}