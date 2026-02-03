import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import logo from '@/assets/images/logos/runlytics-logo.jpg'

function HeroSection() {
  const handleCTA = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-runlytics-blue/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-runlytics-blue-light/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-runlytics-gold/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 inline-block"
        >
          <img
            src={logo}
            alt="Run-lytics Data Services"
            className="mx-auto h-28 w-auto rounded-lg shadow-2xl shadow-runlytics-blue/20 sm:h-36 md:h-44"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Run on{' '}
          <span className="gradient-text">Insights!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          Business Intelligence & Analytics solutions that transform your raw data into clear,
          actionable insights — powered by Power BI, Tableau, and Qlik.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleCTA}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.05rem',
              background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
              },
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.05rem',
              borderColor: 'rgba(255,255,255,0.2)',
              color: '#f1f5f9',
              '&:hover': {
                borderColor: 'rgba(37,99,235,0.5)',
                backgroundColor: 'rgba(37,99,235,0.08)',
              },
            }}
          >
            Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
