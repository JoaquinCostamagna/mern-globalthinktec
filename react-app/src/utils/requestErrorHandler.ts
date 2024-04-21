import { toast } from 'react-toastify';
import { REQUEST_ERROR_MESSAGES } from '../constants/errorMessages';
// Generic error handler
const handleRequestError = (error: any) => {
    if (error.message === 'Network Error') {
        toast.error(REQUEST_ERROR_MESSAGES.NETWORK_ERROR);
    } else if (error.response) {
        switch (error.response.status) {
            case 401:
                toast.error(REQUEST_ERROR_MESSAGES.UNAUTHORIZED);
                break;
            case 403:
                toast.error(REQUEST_ERROR_MESSAGES.FORBIDDEN);
                break;
            case 404:
                toast.error(REQUEST_ERROR_MESSAGES.NOT_FOUND);
                break;
            case 500:
                toast.error(REQUEST_ERROR_MESSAGES.SERVER_ERROR);
                break;
            default:
                console.log('Error', error.response.data.message);
        }
    }
};

export default handleRequestError;