import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  delay?: number
}

function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="mb-6 flex h-24 w-24 items-center justify-center">
            <img src={image} alt={title} className="h-full w-full object-contain" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">{title}</h4>
          <p className="text-center text-sm leading-relaxed text-slate-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceCard
