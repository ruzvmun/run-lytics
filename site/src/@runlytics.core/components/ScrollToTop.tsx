import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Fab
            size="small"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
              },
            }}
            aria-label="Scroll to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
