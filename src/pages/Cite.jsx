import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../components/LanguageToggle'

function Cite() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const page = t('experiencePages.cite', { returnObjects: true })

  return (
    <div className="container">
      <LanguageToggle />
      <button className="back-btn" onClick={() => navigate(-1)}>{page.back}</button>

      <div className="exp-header">
        <div>
          <h1>{page.role}</h1>
          <a href="https://www.cite.gr/" target="_blank" rel="noreferrer" className="company-link">
            C.I.T.E
          </a>
        </div>
        <span className="exp-duration">{page.duration}</span>
      </div>

      <div className="exp-section">
        <h3 className="section-title">{page.overview_title}</h3>
        <p className="exp-text">{page.overview}</p>
      </div>

      <div className="exp-section">
        <h3 className="section-title">{page.whatIDid}</h3>
        <div className="exp-list">
          {page.items.map((item, index) => (
            <div className="exp-item" key={index}>{item}</div>
          ))}
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">{page.technologies}</h3>
        <div className="skills">
          {['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs', 'Microservices'].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="exp-section">
        <h3 className="section-title">{page.project}</h3>
        <div className="card">
          <div className="card-header">
            <h4>OpenCDMP</h4>
            <a href="https://github.com/OpenCDMP/OpenCDMP" target="_blank" rel="noreferrer" className="card-link">
              {page.viewOnGithub}
            </a>
          </div>
          <p className="description">{page.projectDescription}</p>
        </div>
      </div>

    </div>
  )
}

export default Cite