// Definition of the Log type
export type Log = { 
    _id: string,
    message: string,
    level: 'info' | 'error' | 'warning',
    timestamp: Date
}