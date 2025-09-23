import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './CookieConsent.css'
import { RiCloseLine, RiShieldLine } from 'react-icons/ri'
import LegalModal from './LegalModal'

function CookieConsent() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  useEffect(() => {
    // Verificar se o utilizador já deu consentimento
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      // Mostrar banner após um pequeno delay
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }

    // Para testar: sempre mostrar (remover em produção)
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
  }

  const closeBanner = () => {
    setIsVisible(false)
  }

  const openModal = (type) => {
    setModalType(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalType('')
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-header">
          <div className="cookie-icon">
            <RiShieldLine />
          </div>
          <div className="cookie-text">
            <h4>{t('cookies.title')}</h4>
            <p>
              {t('cookies.text')}
            </p>
            <p className="cookie-note">
              <small>
                {t('cookies.note')}
                <button onClick={() => openModal('privacy')} className="cookie-link"> {t('cookies.privacyPolicy')}</button> {t('cookies.and')}
                <button onClick={() => openModal('cookies')} className="cookie-link"> {t('cookies.cookiePolicy')}</button>.
              </small>
            </p>
          </div>
          <button
            className="cookie-close"
            onClick={closeBanner}
            aria-label="Fechar banner de cookies"
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="cookie-actions">
          <button
            className="cookie-btn essential"
            onClick={acceptEssential}
          >
            {t('cookies.essentialOnly')}
          </button>
          <button
            className="cookie-btn accept"
            onClick={acceptAll}
          >
            {t('cookies.acceptAll')}
          </button>
        </div>
      </div>

      <LegalModal
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalType}
      />
    </div>
  )
}

export default CookieConsent