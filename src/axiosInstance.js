import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://olofofohub-ac5e6.firebaseio.com/'
})

export default instance;