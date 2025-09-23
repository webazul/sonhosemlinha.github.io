import { useTranslation } from 'react-i18next'
import './TestimonialsSection.css'

function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.client1Name'),
      occasion: t('testimonials.client1Service'),
      text: t('testimonials.client1Text'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.client2Name'),
      occasion: t('testimonials.client2Service'),
      text: t('testimonials.client2Text'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.client3Name'),
      occasion: t('testimonials.client3Service'),
      text: t('testimonials.client3Text'),
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section id="depoimentos" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2 className="testimonials-title">
            {t('testimonials.title')}
            <span className="highlight"> {t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-occasion">{testimonial.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="testimonials-cta">
          <h3>{t('testimonials.ctaTitle')}</h3>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('testimonials.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection