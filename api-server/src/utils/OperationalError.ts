class OperationalError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean = true;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';

        Error.captureStackTrace(this, this.constructor);
    }
}

export default OperationalError;