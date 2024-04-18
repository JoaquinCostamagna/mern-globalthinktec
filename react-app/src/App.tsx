import './App.scss'
import { Box, Container, ThemeProvider } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
import Products from './pages/Products/Products'

function App() {

  const rootElement = document.getElementById("root");
  const theme: Theme = createTheme({
    palette: {
      primary: { main: '#ff6138' },
      secondary: { main: '#2194cf' },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement
        }
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement
        }
      },
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="flex flex-col min-h-[100dvh] bg-skin-card">
          <Container component="div" className="flex flex-col flex-grow items-center p-0" maxWidth="lg">
            <Products />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
