import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#26C6DA',
      light: '#43D675',
      dark: '#1A8A99',
    },
    secondary: {
      main: '#26C6DA',
      contrastText: '#fff',
    },
    background: {
      default: '#F4F6FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#222222',
      secondary: '#666666',
    },
    success: {
      main: '#43D675',
    },
    error: {
      main: '#FF4B4B',
    },
    warning: {
      main: '#FFB300',
    },
    info: {
      main: '#FF6EC7',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 800,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: { fontWeight: 500, fontSize: '1.1rem' },
    body2: { fontWeight: 500, fontSize: '1rem' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          background: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 700,
          padding: '8px 24px',
        },
        contained: {
          background: 'linear-gradient(90deg, #43D675 0%, #26C6DA 100%)',
          boxShadow: '0 4px 12px rgba(38, 198, 218, 0.2)',
          '&:hover': {
            background: 'linear-gradient(90deg, #3BC567 0%, #1FB3C7 100%)',
            boxShadow: '0 6px 16px rgba(38, 198, 218, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: '#fff',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 14,
          borderRadius: 7,
          backgroundColor: '#B3E5FC',
        },
        bar: {
          borderRadius: 7,
          background: 'linear-gradient(90deg, #FFD700 0%, #26C6DA 100%)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#FFD700',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: '12px 0',
          padding: '16px 24px',
          borderRadius: '20px',
          border: '2px solid',
          borderColor: 'transparent',
          backgroundColor: '#FFFFFF',
          transition: 'all 0.2s cubic-bezier(.4,2,.6,1)',
          '&:hover': {
            backgroundColor: 'rgba(38, 198, 218, 0.12)',
            borderColor: '#26C6DA',
          },
          '&.Mui-checked': {
            backgroundColor: 'rgba(255, 215, 0, 0.13)',
            borderColor: '#FFD700',
          },
        },
      },
    },
  },
}) 