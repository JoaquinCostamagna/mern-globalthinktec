import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import { Log } from '../models/logs'
import { LOGS_INFO_MESSAGES } from '../constants/infoMessages'

/**
 * Renders a list of logs.
 *
 * @param {Object} props - The component props.
 * @param {Log[]} props.logs - The array of logs to display.
 * @returns {JSX.Element} The rendered component.
 */
function LogsList({ logs }: { logs: Log[] | undefined }) {
    return (
        <>
            <Box className='w-full'>
                {/* Conditional rending of logs list or info message where the list is empty */}
                {logs?.length ?
                    <Stack className='divide-y-4 rounded-lg overflow-hidden'>
                        {
                            logs?.map((log: Log) => (
                                <Alert severity={log.level} key={log._id}>
                                    [{log.timestamp.toLocaleDateString()}] { log.message }
                                </Alert>
                            ))
                        }
                    </Stack>
                    :
                    <Alert severity="info">
                        {LOGS_INFO_MESSAGES.NO_RECORDS}
                    </Alert>
                }
            </Box>
        </>
    )
}

export default LogsList