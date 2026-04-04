import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../components/LanguageToggle'

function CobaltFairy() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const page = t('experiencePages.cobaltFairy', { returnObjects: true })

  return (
    <div className="container">
      <LanguageToggle />
      <button className="back-btn" onClick={() => navigate(-1)}>{page.back}</button>

      <div className="exp-header">
        <div>
          <h1>{page.role}</h1>
          <span className="company-link">Cobalt Fairy</span>
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
          {['React', 'JavaScript', 'CSS', 'Figma', 'REST APIs'].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CobaltFairy