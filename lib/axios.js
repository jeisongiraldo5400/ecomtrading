import axios from 'axios';
import config from '../config/config.json';

const SERVER_BASE = (config && config.api) || 'http://localhost:8080'
const http = axios.create({
    baseURL: `${SERVER_BASE}`,
    timeout: 7700000
})


http.interceptors.response.use(response => response, e => {
    const firstMsg = (e && e.response && e.response.statusText) || e.toString()

    let msg = {
        message: firstMsg,
        detail: firstMsg,
    }

    if (e.response && e.response.data) {
        msg = e.response.data
    }

    throw msg
})

export default http

