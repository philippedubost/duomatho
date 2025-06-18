import { useState, useEffect } from 'react'
import {
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Fade,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Question } from '../data/lessons'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

const MotionPaper = motion(Paper)

interface QuestionCardProps {
  question: Question
  onAnswer: (isCorrect: boolean) => void
  showResult: boolean
  isTransitioning: boolean
}

// Ajout utilitaires pour fraction/décimal
function fractionToDecimal(str: string): number | null {
  const match = str.trim().match(/^(-?\d+)\s*\/\s*(-?\d+)$/)
  if (match) {
    const num = parseFloat(match[1])
    const denom = parseFloat(match[2])
    if (denom !== 0) return num / denom
  }
  return null
}

function isNumeric(str: string): boolean {
  return /^-?\d+(\.|,)?\d*$/.test(str.trim().replace(',', '.'))
}

function areEquivalent(a: string, b: string): boolean {
  // Normalisation
  const aNorm = a.trim().replace(',', '.')
  const bNorm = b.trim().replace(',', '.')

  // Cas fraction/fraction
  if (fractionToDecimal(aNorm) !== null && fractionToDecimal(bNorm) !== null) {
    return Math.abs(fractionToDecimal(aNorm)! - fractionToDecimal(bNorm)!) < 1e-6
  }
  // Cas fraction/décimal
  if (fractionToDecimal(aNorm) !== null && isNumeric(bNorm)) {
    return Math.abs(fractionToDecimal(aNorm)! - parseFloat(bNorm)) < 1e-3
  }
  if (fractionToDecimal(bNorm) !== null && isNumeric(aNorm)) {
    return Math.abs(parseFloat(aNorm) - fractionToDecimal(bNorm)!) < 1e-3
  }
  // Cas décimal/décimal
  if (isNumeric(aNorm) && isNumeric(bNorm)) {
    return Math.abs(parseFloat(aNorm) - parseFloat(bNorm)) < 1e-3
  }
  // Sinon, comparaison stricte (ex: texte)
  return aNorm.toLowerCase() === bNorm.toLowerCase()
}

export default function QuestionCard({ 
  question, 
  onAnswer, 
  showResult, 
  isTransitioning 
}: QuestionCardProps) {
  const [answer, setAnswer] = useState('')

  const handleSubmit = () => {
    if (!answer) return
    let isCorrect = false
    if (question.type === 'multiple-choice') {
      isCorrect = answer === question.correctAnswer
    } else {
      isCorrect = areEquivalent(answer, question.correctAnswer)
    }
    onAnswer(isCorrect)
  }

  useEffect(() => {
    if (showResult && areEquivalent(answer, question.correctAnswer)) {
      const timer = setTimeout(() => {
        handleSubmit()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showResult, answer, question.correctAnswer])

  useEffect(() => {
    setAnswer('')
  }, [question.id])

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && answer) {
      handleSubmit()
    }
  }

  return (
    <AnimatePresence mode="wait">
      <MotionPaper
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        elevation={3}
        sx={{ 
          p: 3,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2,
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          {question.question}
        </Typography>

        {question.type === 'multiple-choice' && question.options ? (
          <FormControl component="fieldset">
            <RadioGroup
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value)
                const isCorrect = e.target.value === question.correctAnswer
                onAnswer(isCorrect)
              }}
            >
              {question.options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={
                    <Radio 
                      sx={{
                        '&.Mui-checked': {
                          color: 'primary.main',
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 24,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: answer === option ? 'primary.main' : 'text.primary',
                        fontWeight: answer === option ? 'bold' : 'normal',
                      }}
                    >
                      {option}
                    </Typography>
                  }
                  sx={{
                    margin: '4px 0',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: answer === option ? 'primary.main' : 'divider',
                    backgroundColor: answer === option 
                      ? 'rgba(38, 198, 218, 0.1)' 
                      : 'background.paper',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: answer === option 
                        ? 'rgba(38, 198, 218, 0.15)' 
                        : 'action.hover',
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              fullWidth
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              placeholder="Entrez votre réponse"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!answer}
              sx={{ minWidth: 120 }}
            >
              Valider
            </Button>
          </Box>
        )}

        {showResult && (
          <Fade in={showResult}>
            <Box 
              sx={{ 
                mt: 2, 
                mb: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: areEquivalent(answer, question.correctAnswer)
                  ? 'rgba(88, 204, 2, 0.1)'
                  : 'rgba(255, 75, 75, 0.1)',
                border: '2px solid',
                borderColor: areEquivalent(answer, question.correctAnswer)
                  ? 'success.main'
                  : 'error.main',
              }}
            >
              <Typography
                color={areEquivalent(answer, question.correctAnswer) ? 'success.main' : 'error.main'}
                variant="h6"
                sx={{ fontWeight: 600 }}
              >
                {areEquivalent(answer, question.correctAnswer) ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <span>Correct ! 🎉</span>
                  </Box>
                ) : (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CancelIcon />
                    <span>
                      Incorrect. La réponse était {question.correctAnswer}
                    </span>
                  </Box>
                )}
              </Typography>
              {question.explanation && (
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mt: 1 }}
                >
                  {question.explanation}
                </Typography>
              )}
            </Box>
          </Fade>
        )}
      </MotionPaper>
    </AnimatePresence>
  )
} 