import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './PortfolioSection.css'

function PortfolioSection() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('noiva')

  const categories = [
    { id: 'noiva', label: t('portfolio.filterWedding') },
    { id: 'festa', label: t('portfolio.filterParty') },
    { id: 'social', label: t('portfolio.filterFormal') },
    // { id: 'casual', label: t('portfolio.filterCasual') }
  ]

  const portfolioItems = [
    { id: 1, category: 'noiva', title: t('portfolio.weddingClassic'), image: './1.png' },
    { id: 2, category: 'noiva', title: t('portfolio.weddingModern'), image: './2.png' },
    { id: 3, category: 'festa', title: t('portfolio.partyElegant'), image: './1 3.png' },
    { id: 4, category: 'festa', title: t('portfolio.partyGala'), image: './2 3.png' },
    { id: 5, category: 'social', title: t('portfolio.formalSuit'), image: './3 3.png' },
    { id: 6, category: 'social', title: t('portfolio.formalBlazer'), image: './4 3.png' },
    { id: 7, category: 'casual', title: t('portfolio.casualChic') },
    { id: 8, category: 'casual', title: t('portfolio.casualBlouse') },
    { id: 9, category: 'noiva', title: t('portfolio.weddingBoho'), image: './3.png' }
  ]

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-badge">
            <span>{t('portfolio.badge')}</span>
          </div>
          <h2 className="portfolio-title">
            {t('portfolio.title')}
            <span className="highlight"> {t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="portfolio-subtitle">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-img"
                  />
                ) : (
                  <div className="image-placeholder">
                    <p>{item.title}</p>
                    <span>350x400px</span>
                    <small>Foto da peça finalizada</small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>{t('portfolio.ctaText')}</p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('portfolio.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection