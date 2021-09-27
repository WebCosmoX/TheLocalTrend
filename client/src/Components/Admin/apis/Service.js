import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'api/services/'
    : 'http://localhost:5000/api/services/';

// export default baseURL;

export default axios.create({
    baseURL
});