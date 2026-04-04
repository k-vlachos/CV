import { useTranslation } from 'react-i18next'

function LanguageToggle() {
  const { i18n } = useTranslation()

  return (
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
  )
}

export default LanguageToggle