import { Box, Chip, Typography } from '@mui/material'
import { useProgress } from '../context/ProgressContext'
import { motion } from 'framer-motion'

const MotionChip = motion(Chip)

interface StatsDisplayProps {
  xp: number
  streak: number
}

export default function StatsDisplay({ xp, streak }: StatsDisplayProps) {
  const { progress } = useProgress()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
      <Chip
        icon={<span style={{ fontSize: 22 }}>💎</span>}
        label={<span style={{ fontWeight: 700 }}>{xp}<span style={{ fontWeight: 400, marginLeft: 4 }}>XP</span></span>}
        sx={{ fontSize: 18, px: 2, py: 1, background: '#FFFDF7', borderRadius: 2 }}
      />
      <Chip
        icon={<span style={{ fontSize: 22 }}>🔥</span>}
        label={<span style={{ fontWeight: 700 }}>{streak}<span style={{ fontWeight: 400, marginLeft: 4 }}>Streak</span></span>}
        sx={{ fontSize: 18, px: 2, py: 1, background: '#FFFDF7', borderRadius: 2 }}
      />
      {progress.badges.length > 0 && (
        <MotionChip
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          icon={<span>🏆</span>}
          label={`${progress.badges.length} badges`}
          sx={{
            '& .MuiChip-label': {
              fontWeight: 600,
              fontSize: '1.1rem',
            },
            borderWidth: 2,
            padding: '8px 16px',
            background: 'rgba(255, 224, 102, 0.2)',
            borderColor: '#FFE066',
            color: '#1C1C1C',
            '&:hover': {
              background: 'rgba(255, 224, 102, 0.3)',
            },
          }}
        />
      )}
    </Box>
  )
} 