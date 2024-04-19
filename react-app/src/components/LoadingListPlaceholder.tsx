import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

/**
 * Renders a placeholder component for lists that are loading.
 *
 * @param {Object} props - The component props.
 * @param {number} props.count - The number of placeholders to render.
 * @returns {JSX.Element} The rendered placeholder component.
 */
function LoadingListPlaceholder({count}: {count: number}) {
    return (
        <Box className='p-5 w-full'>
            <Stack className='divide-y-4 rounded-lg overflow-hidden'>
                {
                    Array.from(new Array(count)).map((_, index: number) => (
                        <Skeleton key={index} className='w-full h-[10rem]' variant='rectangular' animation='wave'/>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default LoadingListPlaceholder