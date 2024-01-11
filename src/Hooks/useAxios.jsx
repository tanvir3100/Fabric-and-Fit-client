import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:3700'
})

const useAxios = () => {
    return axiosSecure
};

export default useAxios;