import axios from "axios";
import Config from "react-native-config";

const BaseService = axios.create({
  timeout: 60000,
  baseURL: Config.API_URL,
});

BaseService.interceptors.request.use(
  config => {
    //Configure your bearer token or anything in header
    // if (accessToken) {
    //   config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
    // }

    // return config;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

BaseService.interceptors.response.use(
  response => response,
  error => {
    //Configure your unauthorized access, token expired, or anything in here
    //const { response } = error;

    // if (response && unauthorizedCode.includes(response.status)) {
    //   store.dispatch(onSignOutSuccess());
    // }

    return Promise.reject(error);
  },
);

export default BaseService;
