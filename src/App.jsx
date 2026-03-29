import './App.css'

const CV = {
  name: "Konstantinos Vlachos",
  title: "Full Stack Developer",
  github: "https://github.com/k-vlachos",
  email: "vlachos2001@gmail.com",
  skills: [
    "JavaScript", "TypeScript", "React", "Angular",
    "Java", "Spring Boot", "C", "C++", "SQL"
  ],
  experience: [
    {
      company: "C.I.T.E",
      role: "Full Stack Developer",
      duration: "1.5 years",
      description: "Developed a project called OpenCDMP from the ground up. Built full stack features, integrated multiple APIs and gained experience in delivering production-ready software.",
      link: "https://github.com/OpenCDMP/OpenCDMP"
    },
    {
      company: "Cobalt Fairy",
      role: "Frontend Developer",
      duration: "6 months",
      description: "Built the UI for an upcoming mail provider application using React. Responsible for designing and implementing the full front end of the product."
    },
    {
      company: "OTE",
      role: "Telecommunications Intern",
      duration: "Internship",
      description: "Troubleshot wired network issues as part of the telecommunications team. Gained hands-on experience in network infrastructure and problem solving."
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
  ]
}

function App() {
  return (
    <div className="container">

      {/* Hero */}
      <section className="hero">
        <h1>{CV.name}</h1>
        <h2>{CV.title}</h2>
        <div className="links">
          <a href={CV.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${CV.email}`}>Email</a>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h3 className="section-title">Skills</h3>
        <div className="skills">
          {CV.skills.map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h3 className="section-title">Experience</h3>
        {CV.experience.map(job => (
          <div className="card" key={job.company}>
            <div className="card-header">
              <h4>{job.role}</h4>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
            {job.link && (
              <a href={job.link} target="_blank" rel="noreferrer" className="card-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section">
        <h3 className="section-title">Education</h3>
        {CV.education.map(edu => (
          <div className="card" key={edu.institution}>
            <div className="card-header">
              <h4>{edu.institution}</h4>
              <span className="duration">{edu.status}</span>
            </div>
            <p className="description">{edu.degree}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="section">
        <h3 className="section-title">Projects</h3>
        {CV.projects.map(project => (
          <div className="card" key={project.name}>
            <h4>{project.name}</h4>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default App