import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import pacaloLogo from '@/assets/images/clients/pacalo-logo.png'
import comfortTransitLogo from '@/assets/images/clients/comfort-transit-logo.jpg'
import parkNationalLogo from '@/assets/images/clients/park-national-bank-logo.png'

const clients = [
  { name: 'PACALO Medical Transportation', logo: pacaloLogo },
  { name: 'Comfort Transit LLC', logo: comfortTransitLogo },
  { name: 'Park National Bank', logo: parkNationalLogo },
]

function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clients" className="relative py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-runlytics-blue-light">
            Our Partners
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Clients We&apos;ve Worked With
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card group flex h-40 w-full max-w-xs items-center justify-center p-6 transition-all hover:border-runlytics-blue/20"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-24 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
