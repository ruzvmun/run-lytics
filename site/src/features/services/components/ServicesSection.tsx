import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ServiceCard from './ServiceCard'
import biIcon from '@/assets/images/services/business-intelligence-icon.png'
import dataIcon from '@/assets/images/services/data-analysis-icon.png'
import dashboardImg from '@/assets/images/services/dashboard-development.png'

const services = [
  {
    title: 'Business Intelligence',
    description:
      'Unlock smarter decision-making with tech-driven data insights. We turn raw data into clear, actionable info that helps leaders and teams make confident, informed decisions — fast.',
    image: biIcon,
  },
  {
    title: 'Data Storytelling',
    description:
      'Give your team the power to make smarter, faster decisions with top-tier analytics. We build Business Dashboards, Data Visuals, and Interactive Reports that actually drive impact.',
    image: dataIcon,
  },
  {
    title: 'Dashboard Development',
    description:
      'Tap into leading tools like Qlik, Power BI, and Tableau to build custom dashboards that turn your data into real action. Interactive, visual, and designed for impact.',
    image: dashboardImg,
  },
]

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-runlytics-blue/[0.02] to-transparent" />

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-runlytics-blue-light">
            What We Do
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Services We Offer</h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
