import axios from 'axios';

const instance = axios.create({
  headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b', 'Content-Type': 'application/json' },
  validateStatus(status) {
    return (status >= 200 && status < 300) || status === 422; // default
  },
});

export default instance;
