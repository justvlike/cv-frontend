import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/user/all';
const VACANCIES_REST_API_URL = 'http://localhost:8080/api/user/all';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    getVacancies(){
        return axios.get(VACANCIES_REST_API_URL);
    }
}

export default new UserService();