import { Box, Container, Typography, Paper, IconButton, Chip, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { allLessons } from '../data/lessons'
import { useProgress } from '../context/ProgressContext'
import { motion } from 'framer-motion'
import CharacterSprite from '../components/CharacterSprite'

const MotionPaper = motion(Paper)

const statusIcons = [
  { icon: '💎', label: 'XP', key: 'totalXP' },
  { icon: '🔥', label: 'Streak', key: 'currentStreak' },
]

const navIcons = [
  { icon: '🏠', label: 'Home' },
  { icon: '📚', label: 'Lessons' },
  { icon: '🔥', label: 'Streak' },
  { icon: '🏆', label: 'Achievements' },
  { icon: '⋯', label: 'More' },
]

export default function Home() {
  const navigate = useNavigate()
  const { progress, getLessonProgress } = useProgress()

  return (
    <Box sx={{ minHeight: '100vh', background: '#F4F6FB', display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
      {/* Header with mascot and logo */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
        <CharacterSprite behavior="idle" size={56} />
        <Box component="img" src="/images/logo2.png" alt="DuoMatho" sx={{ height: 56, ml: 2 }} />
      </Box>

      {/* Top Status Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        <Chip
          icon={<span style={{ fontSize: 22 }}>💎</span>}
          label={<span style={{ fontWeight: 700 }}>{progress.totalXP}<span style={{ fontWeight: 400, marginLeft: 4 }}>XP</span></span>}
          sx={{ fontSize: 18, px: 2, py: 1, background: '#FFFDF7', borderRadius: 2 }}
        />
        <Chip
          icon={<span style={{ fontSize: 22 }}>🔥</span>}
          label={<span style={{ fontWeight: 700 }}>{progress.bestComboStreak}<span style={{ fontWeight: 400, marginLeft: 4 }}>Meilleure série</span></span>}
          sx={{ fontSize: 18, px: 2, py: 1, background: '#FFFDF7', borderRadius: 2 }}
        />
      </Box>

      {/* Lesson Grid */}
      <Container maxWidth="lg" sx={{ flex: 1, px: { xs: 2, sm: 3 }, width: '100%', maxWidth: '100% !important' }}>
        <Grid container spacing={3} justifyContent="center">
          {allLessons.map((lesson) => {
            const isSurvivor = lesson.id === 999;
            let lessonProgress = getLessonProgress(lesson.id)
            if (lessonProgress > 100) lessonProgress = 100
            let survivorRecord = null;
            if (isSurvivor) {
              survivorRecord = localStorage.getItem('duomatho-survivor-record') || 0;
            }
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={lesson.id}>
                <MotionPaper
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  elevation={3}
                  sx={{
                    borderRadius: 10,
                    p: 1,
                    background: '#fff',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 140
                  }}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                >
                  <Box sx={{ fontSize: 42, mb: 0 }}>{lesson.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#222', fontSize: 20, textAlign: 'center', mb: 0 }}>{lesson.title}</Typography>
                  {isSurvivor && (
                    <Box sx={{ mt: 0, mb: 0, textAlign: 'center', fontWeight: 800, color: '#26C6DA', fontSize: 20 }}>
                      Record : {survivorRecord}
                    </Box>
                  )}
                  {!isSurvivor && (
                    <Box sx={{ width: '60%', height: 14, background: '#E3F2FD', borderRadius: 3, mt: 0, overflow: 'hidden' }}>
                      <Box 
                        sx={{ 
                          height: '100%',
                          width: `${lessonProgress}%`,
                          background: 'linear-gradient(90deg, #43D675 0%, #26C6DA 100%)',
                          transition: 'width 0.3s ease-out',
                          borderRadius: 5
                        }} 
                      />
                    </Box>
                  )}
                </MotionPaper>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, mb: 2 }}>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => {
            localStorage.removeItem('duomatho-progress');
            localStorage.removeItem('duomatho-survivor-record');
            window.location.reload();
          }}
        >
          Réinitialiser la progression
        </Button>
      </Box>
    </Box>
  )
} 