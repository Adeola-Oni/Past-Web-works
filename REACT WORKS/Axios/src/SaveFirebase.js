import axios from 'axios';

const instance = axios.create({
    baseURL: "https://proj-747eb.firebaseio.com/"
});

export default instance;