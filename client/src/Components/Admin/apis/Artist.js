import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'api/artists/'
    : 'http://localhost:5000/api/artists/';

export default axios.create({
    baseURL
});