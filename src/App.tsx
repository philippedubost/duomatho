import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import { theme } from './theme'
import { ProgressProvider } from './context/ProgressContext'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProgressProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson/:id" element={<Lesson />} />
          </Routes>
        </Layout>
      </ProgressProvider>
    </ThemeProvider>
  )
}

export default App 