import { useNavigate } from 'react-router-dom'

function CobaltFairy() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="exp-header">
        <div>
          <h1>Frontend Developer</h1>
          <span className="company-link">Cobalt Fairy</span>
        </div>
        <span className="exp-duration">6 months · Part time</span>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Overview</h3>
        <p className="exp-text">
          Worked part time at Cobalt Fairy for 6 months as a Frontend Developer, responsible for building
          the entire UI of an upcoming mail provider application from scratch. Was given Figma design
          templates and tasked with replicating them in React while making them fully interactive and functional.
        </p>
      </div>

      <div className="exp-section">
        <h3 className="section-title">What I Did</h3>
        <div className="exp-list">
          <div className="exp-item">Built the Login, Register and Forgot Password screens with full implementation</div>
          <div className="exp-item">Developed the main Dashboard from scratch based on Figma designs</div>
          <div className="exp-item">Translated Figma templates into pixel perfect interactive React components</div>
          <div className="exp-item">Handled the full frontend architecture of the project from day one</div>
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Technologies</h3>
        <div className="skills">
          {['React', 'JavaScript', 'CSS', 'Figma', 'REST APIs'].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CobaltFairy