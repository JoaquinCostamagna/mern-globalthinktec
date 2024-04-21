import './App.scss'
import { lazy } from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
// import Products from './pages/Products/Products'
import { Navigate, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';

// Lazy loading / Code splitting of pages components
const Products = lazy(() => import('./pages/Products'))
const Logs = lazy(() => import('./pages/Logs'))

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
        <Routes>
          {/* Main container of the app */}
          <Route path="/" element={<MainContainer/>} >
            {/* Router to products page */}
            <Route path="products" element={<Products />} />
            {/* Router to logs page */}
            <Route path="logs" element={<Logs/>} />
            {/* Router for any other route, redirects to products */}
            <Route path="*" element={<Navigate replace to='products' />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
