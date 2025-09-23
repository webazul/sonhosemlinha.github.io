import { useTranslation } from 'react-i18next'
import './ServicesSection.css'
import { RiUser2Line, RiScissorsLine } from 'react-icons/ri'

function ServicesSection() {
  const { t } = useTranslation()

  const services = [
    {
      title: t('services.weddingDress'),
      description: t('services.weddingDressDesc'),
      features: [t('services.feature1'), t('services.feature2'), t('services.feature3'), t('services.feature4')],
      icon: RiUser2Line
    },
    {
      title: t('services.customClothing'),
      description: t('services.customClothingDesc'),
      features: [t('services.feature5'), t('services.feature6'), t('services.feature7'), t('services.feature8')],
      icon: RiScissorsLine
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="services-container">
        <div className="services-header">
          <div className="services-badge">
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="services-title">
            {t('services.title')}
            <span className="highlight"> {t('services.titleHighlight')}</span>
          </h2>
          <p className="services-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
            <div key={index} className="service-card">
              <div className="service-icon">
                <IconComponent />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection