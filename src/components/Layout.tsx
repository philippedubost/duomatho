import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: '#F4F6FB', 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%', 
      overflow: 'hidden' 
    }}>
      <Box component="main">
        {children}
      </Box>
    </Box>
  )
} 