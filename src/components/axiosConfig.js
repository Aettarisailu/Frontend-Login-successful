import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://new-user-creating-backend-59o7.onrender.com',
  
  //" http://localhost:5001"
});

export default instance;
