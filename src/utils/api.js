import axios from "axios";

const API_KEY = "key9uIaZ1141Jn0fO";
const BASE_URL = "https://api.airtable.com/v0/appVrt9qxUrwB7lwN";

export const get = (url) => {
  return axios.get(`${BASE_URL}/${url}`, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  });
};

export const post = (url, body) => {
  return axios.post(`${BASE_URL}/${url}`, body, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  });
};

export const patch = (url, body) => {
  return axios.patch(`${BASE_URL}/${url}`, body, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  });
};
