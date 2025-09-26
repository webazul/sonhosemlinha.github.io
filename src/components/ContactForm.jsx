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
    dataEvento: '',
    descricao: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpar mensagens de erro quando o utilizador começar a editar
    if (submitError) setSubmitError('')
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    // Campos obrigatórios
    if (!formData.nome.trim()) {
      setSubmitError(t('contact.errorName'))
      return false
    }
    if (!formData.email.trim()) {
      setSubmitError(t('contact.errorEmail'))
      return false
    }
    if (!formData.telefone.trim()) {
      setSubmitError(t('contact.errorPhone'))
      return false
    }

    // Validar formato do email
    if (!validateEmail(formData.email)) {
      setSubmitError(t('contact.errorEmailFormat'))
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')

    // Validar formulário
    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      // Preparar dados para a API - mapear campos do formulário para o que a API espera
      const apiData = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: formData.telefone.trim(),
        assunto: formData.dataEvento ? `Data: ${formData.dataEvento}` : 'Contacto do website',
        mensagem: formData.descricao.trim() || 'Sem mensagem adicional'
      }

      // Fazer o POST request para a API
      const response = await fetch('https://form.webazul.pt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Token': 'token-sonhosemlinha-4f3b2e5a'
        },
        body: JSON.stringify(apiData)
      })

      if (response.ok) {
        // Sucesso - mostrar mensagem de sucesso e limpar formulário
        setSubmitMessage(t('contact.successMessage'))
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          dataEvento: '',
          descricao: ''
        })

        // Limpar mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSubmitMessage('')
        }, 5000)
      } else {
        // Erro da API
        throw new Error(`HTTP ${response.status}`)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitError(t('contact.errorSending'))
    } finally {
      setIsSubmitting(false)
    }
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

            {submitError && (
              <div className="submit-message error">
                {submitError}
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
                placeholder=""
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