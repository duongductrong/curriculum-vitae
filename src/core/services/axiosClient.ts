import Axios from 'axios';
import jwtService from './jwt.service';

const axiosClient = Axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "content-type": "application/json",
        Authorization: `BEARER ${jwtService.getToken()}`
    }
})

axiosClient.interceptors.request.use(async (config) => {
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        console.log(response);
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
})

export default axiosClient;