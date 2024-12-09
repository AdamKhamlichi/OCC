import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const fetchEvents = () => api.get('/events');
export const fetchNews = () => api.get('/news');
export const sendMessage = (data) => api.post('/messages', { data });
export const fetchEvent = (id) => api.get(`/events/${id}`);

export default api;