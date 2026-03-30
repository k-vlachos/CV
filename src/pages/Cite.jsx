import { useNavigate } from 'react-router-dom'

function Cite() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="exp-header">
        <div>
          <h1>Full Stack Developer</h1>
          <a href="https://www.cite.gr/" target="_blank" rel="noreferrer" className="company-link">
            C.I.T.E
          </a>
        </div>
        <span className="exp-duration">18 months</span>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Overview</h3>
        <p className="exp-text">
          Worked as a Full Stack Developer at C.I.T.E for 18 months, contributing to the development
          of OpenCDMP — an open-source platform for managing Data and Software Management Plans.
          Joined from the very first release (v1.0.0) and contributed through to v1.3.0, gaining
          experience in the full software development lifecycle from initial architecture to production releases.
        </p>
      </div>

      <div className="exp-section">
        <h3 className="section-title">What I Did</h3>
        <div className="exp-list">
          <div className="exp-item">Built and maintained full stack features using Java / Spring Boot on the backend and Angular on the frontend</div>
          <div className="exp-item">Created new projects and modules from scratch within the OpenCDMP ecosystem</div>
          <div className="exp-item">Integrated multiple external APIs into the platform</div>
          <div className="exp-item">Debugged and resolved complex issues across the full stack</div>
          <div className="exp-item">Contributed across releases from v1.0.0 through v1.3.0</div>
          <div className="exp-item">Learned how to think and work as a professional developer in a real team environment</div>
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Technologies</h3>
        <div className="skills">
          {['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs', 'Microservices'].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Project</h3>
        <div className="card">
          <div className="card-header">
            <h4>OpenCDMP</h4>
            <a href="https://github.com/OpenCDMP/OpenCDMP" target="_blank" rel="noreferrer" className="card-link">
              View on GitHub →
            </a>
          </div>
          <p className="description">
            An open and extensible platform for managing Output Management Plans such as Data Management Plans
            and Software Management Plans. Built with a microservices architecture using Spring Boot, Angular,
            PostgreSQL, RabbitMQ and Elasticsearch.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Cite