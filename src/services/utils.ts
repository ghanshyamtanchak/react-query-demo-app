import axios from "axios";

export const getRequest = (url: string) => {
  return axios.get(url);
};
