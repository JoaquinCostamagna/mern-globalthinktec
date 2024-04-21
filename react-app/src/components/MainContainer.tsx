import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

/**
 * Renders the main container component.
 * @returns The JSX element representing the main container.
 */
function MainContainer() {
    const location = useLocation();
    const activeRoute = location.pathname;
    const title = getTitle();
    const linkData = getLinkData();

    function getTitle() {
        switch (activeRoute) {
            case '/products':
                return 'Productos';
            case '/logs':
                return 'Registros';
            default:
                return 'Inicio';
        }
    }

    function getLinkData() {
        switch (activeRoute) {
            case '/products':
                return { to: '/logs', text: 'Ver Registros' };
            case '/logs':
                return { to: '/products', text: 'Ver Productos' };
            default:
                return { to: '/products', text: 'Ver Productos' };
        }
    }


    return (
        <Box className="flex flex-col min-h-[100dvh] bg-skin-card">
            <Container component="div" className="flex flex-col flex-grow items-center p-3" maxWidth="lg">
                <Box className='flex justify-between p-3 bg-skin-primary rounded w-full'>
                    <Button className="bg-skin-background text-skin-headline text-lg px-4">{title}</Button>
                    <Link to={linkData.to}>
                        <Button className='bg-skin-background'>{linkData.text}</Button>
                    </Link>
                </Box>
                {/* Represents fallback for loading while downloading component */}
                <Suspense fallback={<h5>Cargando...</h5>}>
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    )
}

export default MainContainer