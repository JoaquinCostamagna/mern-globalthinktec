import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import axios from "axios";
import LoadingListPlaceholder from "../components/LoadingListPlaceholder";
import LogsList from "../components/logs/LogsList";
import { Log } from "../models/logs";
/**
 * Renders the Logs page.
 */
function Logs() {

    const [loading, setLoading] = useState<number>(0);
    const [logs, setLogs] = useState<Log[] | undefined>();

    useEffect(() => {
        fetchLogs();
    }, [])

    /**
     * Fetches logs from the server and updates the state with the retrieved data.
     */
    const fetchLogs = async () => {
        setLoading(prev => prev + 1);
        try {
            const res = await axios.get('/logs?count=10');
            // timestamp transformation from ISO date to Date object
            setLogs(res.data.map((log: Log) => ({...log, timestamp: new Date(log.timestamp)})));
        } catch (error) {
            // Generic error handling in interceptors
        }
        setLoading(prev => prev - 1);
    }

    return (
        <>
            {/* Conditional rendering of loading placeholder or logs list */}
            <Box className='py-5 w-full'>
                {loading > 0 ?
                    <LoadingListPlaceholder count={5}/>
                    :
                    <LogsList logs={logs} />
                }
            </Box>
        </>
    )
}

export default Logs