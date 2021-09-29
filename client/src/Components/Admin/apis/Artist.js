import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'api/artists/'
    : 'http://localhost:5000/api/artists/';

console.log({ artistUrl: baseURL });


export default axios.create({
    baseURL
});