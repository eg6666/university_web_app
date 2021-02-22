import axios from 'axios';
import routes from '@/router';
import session from '@/services/session';

// App Url
const apiUrl = process.env.VUE_APP_API_URL;

// Create axios request instance
const request = axios.create({ baseURL: apiUrl, withCredentials: true });
request.defaults.timeout = 5 * 60 * 1000;

function registerResponseInterception(req) {
  req.interceptors.response.use((response) => response, (error) => {
    if (routes.currentRoute.name !== 'Login' && error.response && (error.response.status === 401 || error.response.status === 403)) {
      session.removeToken();
      routes.push({ name: 'Login' });

      // vm.$notification.error({
      //   message: 'Access Expired.',
      //   description: 'Please login again to use application.',
      // });
      return Promise.reject(new Error('Access Expired.'));
    }
    return Promise.reject(error);
  });
}

// Check user for authorization
registerResponseInterception(request);

/* eslint no-param-reassign: "off" */
request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${session.getToken()}`;
  return config;
}, (err) => Promise.reject(err));


export default request;
