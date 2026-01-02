import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './WhatsAppWidget.css'
import { RiWhatsappLine, RiCloseLine, RiShirtLine, RiSmartphoneLine } from 'react-icons/ri'

function WhatsAppWidget() {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = "+351924702709"
  const defaultMessage = t('whatsapp.defaultMessage')

  const openWhatsApp = () => {
    const message = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`whatsapp-widget ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <div className="whatsapp-bubble">
          <div className="bubble-header">
            <div className="bubble-avatar">
              <RiShirtLine />
            </div>
            <div className="bubble-info">
              <h4>Sonhos em Linha</h4>
              <p>{t('whatsapp.normalResponse')}</p>
            </div>
            <button
              className="bubble-close"
              onClick={toggleExpanded}
              aria-label="Fechar chat"
            >
              <RiCloseLine />
            </button>
          </div>
          <div className="bubble-content">
            <div className="message">
              <p>{t('whatsapp.greeting')}</p>
              <p>{t('whatsapp.howHelp')}</p>
              <ul>
                <li>{t('whatsapp.weddingDresses')}</li>
                <li>{t('whatsapp.customClothing')}</li>
                <li>{t('whatsapp.alterations')}</li>
                <li>{t('whatsapp.pricesDeadlines')}</li>
              </ul>
            </div>
          </div>
          <div className="bubble-footer">
            <button
              className="whatsapp-button"
              onClick={openWhatsApp}
            >
              <RiSmartphoneLine className="whatsapp-icon" />
              {t('whatsapp.startConversation')}
            </button>
          </div>
        </div>
      )}

      <button
        className="whatsapp-float-button"
        onClick={isExpanded ? openWhatsApp : toggleExpanded}
        aria-label={t('whatsapp.contactWhatsApp')}
      >
        <RiWhatsappLine className="whatsapp-svg" />
      </button>
    </div>
  )
}

export default WhatsAppWidget