import Layout from '@/app/layout/Layout'
import HeroSection from '@/features/hero/components/HeroSection'
import AboutSection from '@/features/about/components/AboutSection'
import ServicesSection from '@/features/services/components/ServicesSection'
import ClientsSection from '@/features/clients/components/ClientsSection'
import ContactSection from '@/features/contact/components/ContactSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </Layout>
  )
}

export default App
