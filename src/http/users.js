import axios from 'axios';

export const loadUsers = () => {
    // axios.get('http://localhost:8081/rest')
    return axios.get('http://run.mocky.io/v3/c1ba1a88-b5f1-4dd5-95e2-9ec01d25d577');
}

export default loadUsers;
