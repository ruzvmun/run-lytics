import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import InsightsIcon from '@mui/icons-material/Insights'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import DevicesIcon from '@mui/icons-material/Devices'

const highlights = [
  { icon: <InsightsIcon sx={{ fontSize: 32 }} />, label: 'BI & Analytics' },
  { icon: <DevicesIcon sx={{ fontSize: 32 }} />, label: 'eCommerce' },
  { icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />, label: 'Fintech' },
  { icon: <AutoGraphIcon sx={{ fontSize: 32 }} />, label: 'Custom Apps' },
]

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-runlytics-blue-light">
            About Us
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Driving Digital Transformation
          </h3>
          <p className="text-lg leading-relaxed text-slate-300">
            Run-lytics Data Services is a dynamic technology provider at the forefront of digital
            transformation. We specialize in Business Intelligence & Analytics solutions powered by
            tools like Power BI, Tableau and Qlik. We build robust BI & Analytics platforms to drive
            business growth, create seamless online experiences in eCommerce, deliver cutting-edge
            fintech innovations, and craft scalable, custom applications tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-card flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-runlytics-blue/20"
            >
              <div className="text-runlytics-blue-light">{item.icon}</div>
              <span className="text-sm font-medium text-slate-200">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
