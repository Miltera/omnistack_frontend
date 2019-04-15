import axios from 'axios'

const api = axios.create({
    baseURL: 'https://myomnistack.herokuapp.com',
});

export default api;