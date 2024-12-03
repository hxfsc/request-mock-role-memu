import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const TIMEOUT = 4 * 1000;
const BASE_URL = import.meta.env.BASE_URL;

export enum METHOD_TYPES {
  POST = "POST",
  GET = "GET",
}

export enum STATUS {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface ResponseData {
  list?: any;
  data?: any;
  msg: STATUS;
}

export const JsonParse = (res: any): Record<string, any> => {
  try {
    return JSON.parse(res);
  } catch {
    return {};
  }
};

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const request = (
  options: AxiosRequestConfig = {}
): Promise<ResponseData> => {
  const axiosOptions: AxiosRequestConfig = Object.assign(
    {
      transformResponse: [(data: any) => data],
      headers: {
        Accept: "application/json",
        ContentType: "application/json:charset=UTF-8",
      },
      paramsSerializer: (params: any) => qs.stringify(params),
      timeout: TIMEOUT,
      baseURL: BASE_URL,
    },
    options
  );
  return new Promise((resolve, reject) => {
    axios(axiosOptions)
      .then((res) => {
        resolve({
          ...JsonParse(res.data),
          msg: STATUS.SUCCESS,
        });
      })
      .catch((error) => {
        reject({
          data: error,
          msg: STATUS.ERROR,
        });
      });
  });
};

export default request;
