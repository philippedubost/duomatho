import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// List of mascot images by behavior
const mascotImages: Record<string, string[]> = {
  celebrate: [
    'fox_happy_jump.png', 'happy stars.gif', 'party.png', 'veryhappy.png', 'fox_sparkle_smile.png', 'fox_big_wave.png', 'fox_wink_wave.png', 'fox_thumbs_up.png', 'fox_proud_chest.png', 'hero.png', 'happy.png', 'wave hapy.gif',
  ],
  think: [
    'fox_confused_thinking.png', 'fox_idea_book.png', 'confused.png', 'smart.gif', 'maths lover.gif',
  ],
  idle: [
    'idle happy.gif', 'fox_wink_open.png', 'fox_hold_progressbar.png', 'workmore.png', 'fox_sparkle_smile.png', 'happy.png',
  ],
  fail: [
    'sad.png', 'unhappy.png', 'angry.gif', 'mean teacher.gif', 'fox_confused_thinking.png', 'confused.png',
  ],
  love: [
    'loving.gif', 'fox_idea_book.png',
  ],
  buzzed: [
    'buzzed.png', 'crazy.gif', 'smooth.gif',
  ],
  serious: [
    'serious.gif', 'fox_proud_chest.png',
  ],
  default: [
    'fox_happy_jump.png', 'happy.png', 'idle happy.gif', 'fox_sparkle_smile.png', 'fox_wink_open.png',
  ],
}

export type MascotBehavior = 'idle' | 'think' | 'celebrate' | 'sad'

const getMascotImageForBehavior = (behavior: MascotBehavior): string => {
  const images = mascotImages[behavior] || mascotImages.default
  const randomIndex = Math.floor(Math.random() * images.length)
  return `/images/${images[randomIndex]}`
}

interface CharacterSpriteProps {
  behavior: MascotBehavior
  size?: number
  isCorrect?: boolean
}

export default function CharacterSprite({ behavior, size = 56, isCorrect }: CharacterSpriteProps) {
  const MotionBox = motion(Box)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    // Ne change l'image que si on n'en a pas encore ou si le comportement change
    if (!selectedImage || behavior !== 'idle') {
      setSelectedImage(getMascotImageForBehavior(behavior))
    }
  }, [behavior])

  // Détermine le comportement réel en fonction de isCorrect
  const actualBehavior = isCorrect !== undefined 
    ? (isCorrect ? 'celebrate' : 'sad')
    : behavior

  return (
    <MotionBox
      animate={{
        y: actualBehavior === 'idle' ? [0, -4, 0] : 0,
        scale: actualBehavior === 'celebrate' ? [1, 1.1, 1] : 1,
      }}
      transition={{
        duration: actualBehavior === 'idle' ? 2 : 0.3,
        repeat: actualBehavior === 'idle' ? Infinity : 0,
        ease: 'easeInOut',
      }}
      sx={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: actualBehavior === 'sad' ? 'grayscale(0.5)' : 'none',
      }}
    >
      <img 
        src={selectedImage} 
        alt={`Mascot ${actualBehavior}`}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </MotionBox>
  )
}

export { getMascotImageForBehavior }

export const allMascotImages = Object.values(mascotImages).flat().map(f => `/images/${f}`) 