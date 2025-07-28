import axios from 'axios'
import { BACKEND_URI } from '../Utils/constants'


const axiosInstance = axios.create({
    baseURL: BACKEND_URI + "/api",
});

export default axiosInstance;