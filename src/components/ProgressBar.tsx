import { Box } from '@mui/material'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  height?: number
  width?: string
}

export default function ProgressBar({ progress, height = 6, width = '100%' }: ProgressBarProps) {
  return (
    <Box sx={{ width, height, background: '#E3F2FD', borderRadius: 1.5, overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #43D675 0%, #26C6DA 100%)',
          borderRadius: 6,
        }}
      />
    </Box>
  )
} 