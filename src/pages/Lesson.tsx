import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
  Fade,
  Zoom,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { allLessons } from '../data/lessons'
import { useProgress } from '../context/ProgressContext'
import confetti from 'canvas-confetti'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import CharacterSprite, { MascotBehavior, getMascotImageForBehavior } from '../components/CharacterSprite'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)

const celebration = (duration = 2000) => {
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const interval: any = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
  }, 250)
}

const getComboStars = (combo: number) => {
  if (combo >= 10) return 3
  if (combo >= 5) return 2
  if (combo >= 3) return 1
  return 0
}

const getComboMessage = (combo: number) => {
  if (combo >= 10) return 'Série incroyable !';
  if (combo >= 5) return 'Incroyable série !';
  if (combo >= 3) return 'Super !';
  return '';
};

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function Lesson() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addXP, completeLesson, progress, updateBestComboStreak } = useProgress()
  const [currentExercise, setCurrentExercise] = useState(0)
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState<number>(() => {
    if (id === '999') {
      return Number(localStorage.getItem('duomatho-survivor-record') || 0);
    }
    return 0;
  });
  const [questions, setQuestions] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [showStreak, setShowStreak] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [streakStars, setStreakStars] = useState(0)
  const [answerHistory, setAnswerHistory] = useState<{ correct: boolean; timestamp: number }[]>([])
  const [characterBehavior, setCharacterBehavior] = useState<MascotBehavior>('idle')
  const [endOfLesson, setEndOfLesson] = useState(false)
  const [bounce, setBounce] = useState(false);
  const [popupType, setPopupType] = useState<'good' | 'bad' | null>(null)
  const [popupMascot, setPopupMascot] = useState<string | null>(null)
  const [bestStreakThisLesson, setBestStreakThisLesson] = useState(0)

  const lesson = allLessons.find(l => l.id === Number(id))
  if (!lesson) {
    navigate('/')
    return null
  }

  useEffect(() => {
    let q = lesson.questions;
    if (lesson.id === 999) {
      q = shuffleArray([...q]);
    } else {
      q = shuffleArray([...q]).slice(0, Math.min(10, q.length));
    }
    setQuestions(q);
    setCurrentExercise(0);
    setScore(0);
    setEndOfLesson(false);
    setStreak(0);
    setShowStreak(false);
    setAnswerHistory([]);
  }, [lesson.id]);

  useEffect(() => {
    if (showResult || endOfLesson) {
      setBounce(false);
      const timer = setTimeout(() => setBounce(true), 100);
      return () => clearTimeout(timer);
    } else {
      setBounce(false);
    }
  }, [showResult, endOfLesson]);

  useEffect(() => {
    if (!showResult && !endOfLesson) {
      setCharacterBehavior('think')
    }
  }, [currentExercise, showResult, endOfLesson])

  useEffect(() => {
    if ((showResult || endOfLesson) && characterBehavior === 'celebrate') {
      setPopupMascot(getMascotImageForBehavior('celebrate'))
    }
  }, [showResult, endOfLesson, characterBehavior])

  const currentQuestion = questions[currentExercise]

  const handleAnswer = (isCorrect: boolean) => {
    setShowResult(true)
    
    if (isCorrect) {
      // Mise à jour du streak
      const newStreak = streak + 1
      setStreak(newStreak)
      setStreakStars(getComboStars(newStreak))
      // Met à jour le meilleur streak local de la leçon
      setBestStreakThisLesson(prev => Math.max(prev, newStreak))
      
      // Affichage du streak si > 2
      if (newStreak >= 3) {
        setShowStreak(true)
        celebration()
      }

      // Mise à jour du score et de l'historique
      setScore(prev => prev + 1)
      setAnswerHistory(prev => [...prev, { correct: true, timestamp: Date.now() }])
      setCharacterBehavior('celebrate')

      // XP bonus pour le streak
      addXP(10 * newStreak)

      // Passage à la question suivante après délai
      setTimeout(() => {
        setShowStreak(false)
        handleNext()
      }, 2000)

      setPopupType('good')
      setPopupMascot(getMascotImageForBehavior('celebrate'))
    } else {
      // Réinitialisation du streak en cas d'erreur
      setStreak(0)
      setShowStreak(false)
      setStreakStars(0)
      
      // Mise à jour de l'historique
      setAnswerHistory(prev => [...prev, { correct: false, timestamp: Date.now() }])
      setCharacterBehavior('sad')
      setPopupType('bad')
      setPopupMascot(getMascotImageForBehavior('sad'))

      // Gestion spéciale pour le mode Survivant
      if (lesson.id === 999) {
        if (score > record) {
          setRecord(score)
          localStorage.setItem('duomatho-survivor-record', String(score))
        }
        setEndOfLesson(true)
        return
      }

      // Passage à la question suivante après délai
      setTimeout(() => {
        handleNext()
      }, 2000)
    }
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentExercise < questions.length - 1) {
        setCurrentExercise(currentExercise + 1)
        setShowResult(false)
        setIsTransitioning(false)
        setCharacterBehavior('idle')
      } else {
        setEndOfLesson(true)
        if (lesson.id === 999) {
          return;
        }
        const finalScore = Math.round((score / questions.length) * 100)
        completeLesson(lesson.id, finalScore)
        addXP(lesson.xpReward)
        if (finalScore >= 80) setCharacterBehavior('celebrate')
        else if (finalScore >= 50) setCharacterBehavior('think')
        else setCharacterBehavior('sad')
        setTimeout(() => navigate('/'), 2500)
      }
    }, 1000)
  }

  const lessonProgress = ((currentExercise + 1) / questions.length) * 100

  // À la fin de la leçon, on met à jour le bestComboStreak global si besoin
  useEffect(() => {
    if (endOfLesson && bestStreakThisLesson > (progress.bestComboStreak || 0)) {
      updateBestComboStreak(bestStreakThisLesson)
    }
  }, [endOfLesson])

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Fade in={showResult || endOfLesson} unmountOnExit onExited={() => { setPopupMascot(null); setPopupType(null); }}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            pointerEvents: 'none',
            background: popupType === 'good' ? 'rgba(255,255,200,0.25)' : 'rgba(255,0,0,0.10)',
          }}
        >
          <Zoom in={showResult || endOfLesson}>
            <MotionBox
              initial={{ scale: 0.7 }}
              animate={bounce ? { scale: [1, 1.08, 0.97, 1.04, 1] } : { scale: 1 }}
              transition={bounce ? { repeat: Infinity, duration: 1.2, repeatType: 'loop' } : { duration: 0.1, type: 'spring' }}
              sx={{
                background: popupType === 'good' ? 'rgba(255,255,255,0.95)' : 'rgba(255,230,230,0.97)',
                borderRadius: 10,
                boxShadow: popupType === 'good' ? '0 12px 48px 0 rgba(0,128,255,0.18)' : '0 12px 48px 0 rgba(255,0,0,0.10)',
                px: 8,
                py: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 340,
                maxWidth: '95vw',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              {/* Mascot image */}
              {showStreak && streak > 2 && popupType === 'good' ? (
                <Box sx={{ mt: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CharacterSprite behavior="celebrate" size={90} />
                  <Typography
                    variant="h4"
                    sx={{ 
                      fontWeight: 800, 
                      color: '#FFD700', 
                      mb: 1,
                      textShadow: '0 1px 4px rgba(0,0,0,0.18)',
                      background: 'rgba(255,255,255,0.7)',
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      display: 'inline-block',
                    }}
                  >
                    {getComboMessage(streak)}
                  </Typography>
                </Box>
              ) : popupMascot && (
                <Box sx={{
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  mt: 1,
                }}>
                  <CharacterSprite behavior={popupType === 'good' ? 'celebrate' : 'sad'} size={120} />
                </Box>
              )}
              {popupType === 'good' && !showStreak && (
                <Typography variant="h4" sx={{ mt: 2, color: '#2e7d32', fontWeight: 700 }}>Bravo !</Typography>
              )}
              {popupType === 'bad' && (
                <Typography variant="h4" sx={{ mt: 2, color: '#d32f2f', fontWeight: 700 }}>Oups, essaie encore !</Typography>
              )}
            </MotionBox>
          </Zoom>
        </Box>
      </Fade>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {lesson.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {lesson.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {answerHistory.slice(-5).map((answer, index) => (
              <Tooltip key={index} title={answer.correct ? "Bonne réponse" : "Mauvaise réponse"}>
                {answer.correct ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <CancelIcon color="error" />
                )}
              </Tooltip>
            ))}
          </Box>
          <Typography variant="h6" color="primary">
            Score: {score}
          </Typography>
        </Box>
      </Box>

      <ProgressBar 
        progress={lessonProgress}
      />
      
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          showResult={showResult}
          isTransitioning={isTransitioning}
        />
      ) : (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography color="error">Aucune question disponible pour cette leçon.</Typography>
        </Box>
      )}

      {endOfLesson && (
        <Fade in={endOfLesson}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            {lesson.id === 999 ? (
              <>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Fin du mode Survivant !
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Série réalisée : {score}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Ton record : {record}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>Retour à l'accueil</Button>
              </>
            ) : (
              <>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {characterBehavior === 'celebrate' && 'Bravo !'}
                  {characterBehavior === 'think' && 'Bien joué !'}
                  {characterBehavior === 'sad' && 'Courage, tu vas progresser !'}
                </Typography>
                <Typography variant="h6">
                  Leçon terminée.
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      )}
    </Container>
  )
} 