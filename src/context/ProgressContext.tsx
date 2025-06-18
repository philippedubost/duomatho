import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lesson, lessons } from '../data/lessons'

interface Progress {
  totalXP: number
  currentStreak: number
  bestStreak: number
  completedLessons: number[]
  lessonScores: Record<number, number>
  badges: string[]
  lastActiveDate: string
  bestComboStreak: number
}

interface ProgressContextType {
  progress: Progress
  addXP: (amount: number) => void
  completeLesson: (lessonId: number, score: number) => void
  getLessonProgress: (lessonId: number) => number
  getCurrentStreak: () => number
  updateBestComboStreak: (combo: number) => void
}

const defaultProgress: Progress = {
  totalXP: 0,
  currentStreak: 0,
  bestStreak: 0,
  completedLessons: [],
  lessonScores: {},
  badges: [],
  lastActiveDate: new Date().toISOString().split('T')[0],
  bestComboStreak: 0
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('duomatho-progress')
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress
  })

  useEffect(() => {
    localStorage.setItem('duomatho-progress', JSON.stringify(progress))
  }, [progress])

  const addXP = (amount: number) => {
    setProgress(prev => ({
      ...prev,
      totalXP: prev.totalXP + amount
    }))
  }

  const completeLesson = (lessonId: number, score: number) => {
    const today = new Date().toISOString().split('T')[0]
    const lastActive = new Date(progress.lastActiveDate)
    const currentDate = new Date(today)
    const dayDifference = Math.floor((currentDate.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))

    setProgress(prev => {
      let newStreak = prev.currentStreak
      if (dayDifference === 1) {
        newStreak = prev.currentStreak + 1
      } else if (dayDifference > 1) {
        newStreak = 1
      }

      return {
        ...prev,
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        completedLessons: [...new Set([...prev.completedLessons, lessonId])],
        lessonScores: {
          ...prev.lessonScores,
          [lessonId]: Math.max(prev.lessonScores[lessonId] || 0, score)
        },
        lastActiveDate: today
      }
    })
  }

  const getLessonProgress = (lessonId: number) => {
    return progress.lessonScores[lessonId] || 0
  }

  const getCurrentStreak = () => {
    const today = new Date().toISOString().split('T')[0]
    const lastActive = new Date(progress.lastActiveDate)
    const currentDate = new Date(today)
    const dayDifference = Math.floor((currentDate.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))

    if (dayDifference > 1) {
      return 0
    }
    return progress.currentStreak
  }

  const updateBestComboStreak = (combo: number) => {
    setProgress(prev => {
      if (combo > prev.bestComboStreak) {
        return { ...prev, bestComboStreak: combo }
      }
      return prev
    })
  }

  return (
    <ProgressContext.Provider value={{
      progress,
      addXP,
      completeLesson,
      getLessonProgress,
      getCurrentStreak,
      updateBestComboStreak
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
} 