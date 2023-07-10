import type { AxiosResponse } from "axios";

import BaseService from "./BaseService";

const ApiService = {
  fetchData(param: any): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      BaseService(param)
        .then(response => {
          resolve(response);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
};

export default ApiService;
