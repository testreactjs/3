import axios from 'axios';

const instance = axios.create({
  headers: { Authorization: 'Token token="f4d91314f64309521727d059b271fe9b"' },
});

export default instance;
