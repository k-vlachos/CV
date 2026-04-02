import { Routes, Route, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Cite from './pages/Cite'
import CobaltFairy from './pages/CobaltFairy'
import OTE from './pages/OTE'
import './App.css'

const CV = {
  name: "Konstantinos Vlachos",
  github: "https://github.com/k-vlachos",
  email: "vlachos2001@gmail.com",
  skills: ["JavaScript", "TypeScript", "React", "Angular", "Java", "Spring Boot", "C", "C++", "SQL"]
}

function Home() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'gr' : 'en')
  }

  return (
    <div className="container">

      {/* Language Toggle */}
      <div className="lang-toggle">
        <button
          className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <span className="lang-divider">|</span>
        <button
          className={`lang-btn ${i18n.language === 'gr' ? 'active' : ''}`}
          onClick={() => i18n.changeLanguage('gr')}
        >
          GR
        </button>
      </div>

      {/* Hero */}
      <section className="hero">
        <h1>{CV.name}</h1>
        <h2>{t('role')}</h2>
        <div className="links">
          <a href={CV.github} target="_blank" rel="noreferrer">{t('nav.github')}</a>
          <a href={`mailto:${CV.email}`}>{t('nav.email')}</a>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h3 className="section-title">{t('sections.skills')}</h3>
        <div className="skills">
          {CV.skills.map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h3 className="section-title">{t('sections.experience')}</h3>
        {t('experience', { returnObjects: true }).map(job => (
          <div
            className="card card-clickable"
            key={job.company}
            onClick={() => navigate(job.route)}
          >
            <div className="card-header">
              <h4>{job.role}</h4>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
            <span className="card-link">{i18n.language === 'en' ? 'View details →' : 'Περισσότερα →'}</span>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section">
        <h3 className="section-title">{t('sections.education')}</h3>
        {t('education', { returnObjects: true }).map(edu => (
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
        <h3 className="section-title">{t('sections.projects')}</h3>
        {t('projects', { returnObjects: true }).map(project => (
          <div className="card" key={project.name}>
            <h4>{project.name}</h4>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience/cite" element={<Cite />} />
      <Route path="/experience/cobalt-fairy" element={<CobaltFairy />} />
      <Route path="/experience/ote" element={<OTE />} />
    </Routes>
  )
}

export default App