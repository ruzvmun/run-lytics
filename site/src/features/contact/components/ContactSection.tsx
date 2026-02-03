import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import ContactForm from './ContactForm'

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-runlytics-blue/[0.02] to-transparent" />

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-runlytics-blue-light">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h3>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-xl font-semibold text-white">
              Let&apos;s Build Something Together
            </h4>
            <p className="mb-8 leading-relaxed text-slate-400">
              Ready to unlock the power of your data? Reach out to us and let&apos;s discuss how we
              can help transform your business with data-driven insights.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-runlytics-blue/10 text-runlytics-blue-light">
                  <PersonIcon />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Contact Person</p>
                  <p className="font-medium text-white">Arnold</p>
                </div>
              </div>

              <a
                href="tel:3093074564"
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-runlytics-blue/10 text-runlytics-blue-light transition-colors group-hover:bg-runlytics-blue/20">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-white group-hover:text-runlytics-blue-light">
                    (309) 307-4564
                  </p>
                </div>
              </a>

              <a
                href="mailto:data@runlytics.com"
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-runlytics-blue/10 text-runlytics-blue-light transition-colors group-hover:bg-runlytics-blue/20">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-white group-hover:text-runlytics-blue-light">
                    data@runlytics.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
