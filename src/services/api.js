import axios from 'axios';

const api = axios.create({
  baseURL: 'sofit-mobile-challenge.herokuapp.com/',
});

export default api;
