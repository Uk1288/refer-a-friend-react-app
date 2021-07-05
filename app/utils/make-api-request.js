import axios from 'axios';
import { BACKEND_ENDPOINT } from '../constants/global-constants';

export const parseError = error => {
  if (error.response) {
    return error.response.data.message;
  }
  return error;
};

export const makeApiRequest = ({ method, url, data, ...others }) =>
  axios.request({
    method,
    baseURL: BACKEND_ENDPOINT,
    url,
    data,
    ...others,
  });

export default makeApiRequest;
