import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

/**
 * Renders the main container component.
 * @returns The JSX element representing the main container.
 */
function MainContainer() {
    return (
        <Box className="flex flex-col min-h-[100dvh] bg-skin-card">
            <Container component="div" className="flex flex-col flex-grow items-center p-0" maxWidth="lg">
                {/* Represents fallback for loading while downloading component */}
                <Suspense fallback={<h5>Cargando...</h5>}>
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    )
}

export default MainContainer