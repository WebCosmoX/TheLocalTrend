import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://www.thelocaltrendent.com/api/auth'
    : 'http://localhost:5000/api/auth';

console.log({ baseURL });

export default axios.create({
    baseURL
});