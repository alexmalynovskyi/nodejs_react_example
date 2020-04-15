import axios from './axios';

const doApiCall = (method, url, data) => {
  return axios({
    method,
    url,
    data
  });
};

const parseResponse = (response) => {
  return response.data;
}

export const getRevertedNumber = async (number) => {
  const response = await doApiCall(
    'post',
    'digits/reverse',
    { number }
  );

  return parseResponse(response);
};