import './App.scss'
import { Box, Container, ThemeProvider } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
import Products from './pages/Products/Products'

function App() {

  const theme: Theme = createTheme({
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
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="flex flex-col min-h-[100dvh] bg-skin-background">
          <Container component="div" className="flex flex-col flex-grow items-center p-0" maxWidth="lg">
            <Products/>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
