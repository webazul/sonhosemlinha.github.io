import { useTranslation } from 'react-i18next'
import './HeroSection.css'

function HeroSection() {
  const { t } = useTranslation()

  const scrollToContact = () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="highlight"> {t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              {t('hero.bookConsultation')}
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.knowAtelier')}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./hero-session-sonhos-em-linha.mp4" type="video/mp4" />
            O seu navegador não suporta reprodução de vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}

export default HeroSection