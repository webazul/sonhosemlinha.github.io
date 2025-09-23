import './App.css'
import './i18n/i18n'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  )
}

export default App