import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

function LoadingListPlaceholder({count}: {count: number}) {
    // This component is a placeholder for lists that are loading
    // Further props could be used to specify format and size
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