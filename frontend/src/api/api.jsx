import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/transaction' });



  const fetchTransactions = (params = {}) => API.get('/transactions', { params });

export default fetchTransactions();
export const fetchStatistics = (params = {}) => API.get('/stats', { params });
export const barChart = (params = {}) => API.get('/barChart', { params });
export const pieChart = (params = {}) => API.get('/pieChart', { params });
export const fetchCombined = (params = {}) => API.get('/combined', { params });
