import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

class Http {

    post = async (url, data) => {
        return axios.post(`${apiUrl}${url}`, data)
    };

}

export default Http