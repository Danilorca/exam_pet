import axios from 'axios';

export const simplePut = (url, body) => {
    const response = axios.put(url, body);
    return response;
}