import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://www.thelocaltrendent.com/api/services/'
    : 'http://localhost:5000/api/services/';

console.log({ serviceUrl: baseURL });

export default axios.create({
    baseURL
});