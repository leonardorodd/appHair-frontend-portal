import axios from 'axios';
import config from '../config.json';

const api = axios.create({
    baseURL: `http://${config.API_SERVICE_HOST}:${config.API_SERVICE_PORT}`,
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
});

api.interceptors.response.use(
    response => {
        /* if (response.status !== 200) {
            console.log(response);
        } */
        return response;
    },
    error => {
        if (!error.response) {
            throw new Error('O servidor não está respondendo');
        }

        return Promise.reject(error.response);
    },
);

export default api;
