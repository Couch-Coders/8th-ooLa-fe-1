/* eslint-disable dot-notation */
import axios from 'axios';
import { auth } from '../service/firebase';

const baseURL = 'https://studyoola.herokuapp.com';

const fetchClient = (() => {
  const getAuthToken = async () => {
    try {
      const token = await auth.currentUser?.getIdToken();
      if (token) {
        const strToken = JSON.stringify('Bearer ' + token);
        return strToken;
      } else {
        return JSON.stringify('Bearer ');
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line prettier/prettier
      'Accept': 'application/json',
    },
  });

  instance.interceptors.request.use(async config => {
    config.headers['Authorization'] = await getAuthToken();
    return config;
  });

  return instance;
})();

export default fetchClient;
