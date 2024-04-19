import './App.scss'
import { Box, Container, ThemeProvider } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
import Products from './pages/Products/Products'

/**
 * The root component of the application.
 * Renders the theme provider and the main content of the app.
 *
 * @returns The JSX element representing the App component.
 */
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
        {/* Main container of the app */}
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
