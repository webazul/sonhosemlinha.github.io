import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiInstagramLine, RiFacebookBoxLine, RiGlobalLine } from 'react-icons/ri'
import LegalModal from './LegalModal'

function Footer() {
  const { t, i18n } = useTranslation()
  const currentYear = new Date().getFullYear()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openModal = (type) => {
    setModalType(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalType('')
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img src="./sonhosemlinha-white.png" alt="Sonhos em Linha" style={{ height: '150px' }} />
              <p>{t('footer.description')}</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contactTitle')}</h4>
            <div className="footer-contact">
              {/* <div className="contact-item">
                <span className="contact-icon">
                  <RiMapPinLine />
                </span>
                <div>
                  <p>Rua das Flores, 123</p>
                  <p>1200-000 Lisboa</p>
                </div>
              </div> */}
              <div className="contact-item">
                <span className="contact-icon">
                  <RiPhoneLine />
                </span>
                <div>
                  <a href="tel:+351910935539" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <p>+351 910 935 539</p>
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <RiMailLine />
                </span>
                <div>
                  <a href="mailto:sonhosemlinhapt@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <p>sonhosemlinhapt@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="language-selector" style={{ marginTop: '2rem' }}>
              <RiGlobalLine className="language-icon" />
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
                aria-label="Selecionar idioma"
              >
                <option value="pt">Português</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          {/* <div className="footer-section">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <RiInstagramLine />
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <RiFacebookBoxLine />
                <span>Facebook</span>
              </a>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; {currentYear} Sonhos em Linha. {t('footer.rights')}</p>
              <div className="legal-links">
                <button onClick={() => openModal('privacy')} className="legal-link-btn">{t('footer.privacyPolicy')}</button>
                <button onClick={() => openModal('terms')} className="legal-link-btn">{t('footer.termsService')}</button>
                <button onClick={() => openModal('cookies')} className="legal-link-btn">{t('footer.cookies')}</button>
              </div>
            </div>
            <div className="footer-credits">
              <p>
                {t('footer.madeWith').split('WebAzul')[0]}
                <a
                  href="https://webazul.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: '#d4af37', textDecoration: 'none'}}
                >
                  WebAzul
                </a>
              </p>
              <button
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
              >
                {t('footer.backToTop')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalType}
      />
    </footer>
  )
}

export default Footer