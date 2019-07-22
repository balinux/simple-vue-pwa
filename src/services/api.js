import axios from "axios";

export default () => {
  return axios.create({
    baseURL: 'https://www.instagram.com/'
    // baseURL: 'https://api.github.com/'
  })
};
