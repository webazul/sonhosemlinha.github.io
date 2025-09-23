import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactForm.css'
import { RiStarLine, RiRulerLine, RiPaintBrushLine, RiTimeLine } from 'react-icons/ri'

function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    dataEvento: '',
    descricao: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    setTimeout(() => {
      setSubmitMessage(t('contact.successMessage'))
      setIsSubmitting(false)
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        servico: '',
        dataEvento: '',
        descricao: ''
      })

      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 2000)
  }

  return (
    <section id="contacto" className="contact-form">
      <div className="contact-form-container">
        <div className="form-header">
          <div className="form-badge">
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="form-title">
            {t('contact.title')}
            <span className="highlight"> {t('contact.titleHighlight')}</span>
          </h2>
          <p className="form-subtitle">
            {/* {t('contact.subtitle')} */}
          </p>
        </div>

        <div className="form-content">
          <div className="form-info">
            <h3>{t('contact.whyChooseTitle')}</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <RiStarLine />
                </div>
                <div>
                  <h4>{t('contact.freeConsultation')}</h4>
                  <p>{t('contact.freeConsultationDesc')}</p>
                </div>
              </div>
              {/* <div className="info-item">
                <div className="info-icon">
                  <RiRulerLine />
                </div>
                <div>
                  <h4>{t('contact.exactMeasures')}</h4>
                  <p>{t('contact.exactMeasuresDesc')}</p>
                </div>
              </div> */}
              <div className="info-item">
                <div className="info-icon">
                  <RiPaintBrushLine />
                </div>
                <div>
                  <h4>{t('contact.customDesign')}</h4>
                  <p>{t('contact.customDesignDesc')}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <RiTimeLine />
                </div>
                <div>
                  <h4>{t('contact.deadlinesMet')}</h4>
                  <p>{t('contact.deadlinesMetDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form-form" onSubmit={handleSubmit}>
            {submitMessage && (
              <div className="submit-message success">
                {submitMessage}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">{t('contact.phoneLabel')}</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="+351 900 000 000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="servico">{t('contact.serviceLabel')}</label>
              <input
                type="text"
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
                placeholder={t('contact.servicePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataEvento">{t('contact.dateLabel')}</label>
              <input
                type="date"
                id="dataEvento"
                name="dataEvento"
                value={formData.dataEvento}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">{t('contact.descriptionLabel')}</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                rows="4"
                placeholder={t('contact.descriptionPlaceholder')}
              ></textarea>
            </div>


            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.submitting') : t('contact.submitButton')}
            </button>

            <p className="form-note">
              {t('contact.requiredNote')}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm