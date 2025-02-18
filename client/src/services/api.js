import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (phoneNumber, pin) => {
  return api.post('/auth/login', { phoneNumber, pin });
};

export const getBalance = (userId) => {
  return api.get(`/user/${userId}`);
};

export const sendMoney = (senderId, receiverPhoneNumber, amount) => {
  return api.post('/transaction/send', { senderId, receiverPhoneNumber, amount });
};

export default api;
