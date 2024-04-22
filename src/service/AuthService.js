import axios from 'axios'

const AUTH_BASE_REST_API_URL = 'http://localhost:8080/api/authenticate';


class AuthService{

    login(email, password) {
        return axios.post(AUTH_BASE_REST_API_URL + "/login", { email, password });
    }

}

export default new AuthService();