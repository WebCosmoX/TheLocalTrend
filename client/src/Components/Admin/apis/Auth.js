import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? '/api/auth'
    : 'http://localhost:5000/api/auth';

export default axios.create({
    baseURL
});