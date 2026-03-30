import { useNavigate } from 'react-router-dom'

function OTE() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="exp-header">
        <div>
          <h1>Telecommunications Technician</h1>
          <span className="company-link">OTE</span>
        </div>
        <span className="exp-duration">6 months · Internship</span>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Overview</h3>
        <p className="exp-text">
          Completed a 6 month internship at OTE, Greece's largest telecommunications provider,
          working as a field technician. Visited customers' homes to diagnose and resolve wired
          network connectivity issues across a range of technologies.
        </p>
      </div>

      <div className="exp-section">
        <h3 className="section-title">What I Did</h3>
        <div className="exp-list">
          <div className="exp-item">Visited customer premises to diagnose and fix wired network connection problems</div>
          <div className="exp-item">Worked with Copper Cable solutions and Fibre to the Home (FTTH) installations</div>
          <div className="exp-item">Maintained and repaired ADSL, VDSL and Vectoring connections</div>
          <div className="exp-item">Handled Last Drop installations and maintenance</div>
          <div className="exp-item">Managed Cabinet DSLAMs including replacement of network cards</div>
          <div className="exp-item">Trained in telecommunications infrastructure and field operations</div>
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">Technologies & Skills</h3>
        <div className="skills">
          {['FTTH', 'ADSL', 'VDSL', 'Vectoring', 'Copper Cable', 'DSLAM', 'Last Drop', 'Network Maintenance'].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default OTE