//service/api/common/BaseApi.js

import axios from 'axios';
const TIME_OUT = 60000; //milisecon

const configRequest = {
  timeout: TIME_OUT,
  responseType: 'text',
  headers: header,
};

const header = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};
export const delay = ms => new Promise(res => setTimeout(res, ms));

function* timeoutPromise(timeout, err, promise) {
  return new Promise((resolve, reject) => {
    // Set timeout timer
    let timer = setTimeout(() => {
      console.log(err);
      reject(err);
    }, timeout);

    promise
      .then(
        response => {
          resolve(response.json());
        },
        err => reject(err.json()),
      )
      .finally(() => clearTimeout(timer));
  });
}

function GET(url) {
  // console.log("GET",url)
  let response = axios.get(url, configRequest).then(handleResponse);

  if (!response) {
    delay(600);
    response = axios.get(url, configRequest).then(handleResponse);
  }
  return response;
}

function* RequestGoogle(url) {
  // console.log("GET",url)
  const response = yield axios
    .get(url, configRequest)
    .then(handleResponseGoogle);

  return response;
}

function* DELETE(url, request = null) {
  request = JSON.stringify(request);
  // console.log("DELETE",url)
  // console.log("Request:",request)

  let response = yield axios.delete(url, configRequest).then(handleResponse);
  if (!response) {
    yield delay(600);
    response = yield axios
      .delete(url, request, configRequest)
      .then(handleResponse);
  }
  return response;
}

function* PUT(url, request) {
  // console.log("PUT",url)
  // console.log("Request:",JSON.stringify(request))
  let response = yield axios
    .put(url, request, configRequest)
    .then(handleResponse);
  if (!response) {
    yield delay(600);
    response = yield axios
      .put(url, request, configRequest)
      .then(handleResponse);
  }
  return response;
}

function* POST(url, request) {
  let response = yield axios
    .post(url, request, configRequest)
    .then(handleResponse);
  console.log(url);
  if (!response) {
    yield delay(600);
    response = yield axios
      .post(url, request, configRequest)
      .then(handleResponse);
  }
  return response;
}

function* RequestWithCustomTimeOut(url, timeout = TIME_OUT) {
  // console.log("GET",url)
  const requestConfig = Object.assign({}, configRequest);
  requestConfig.timeout = timeout;
  let response = yield axios.get(url, requestConfig).then(handleResponse);
  if (!response) {
    yield delay(600);
    response = yield axios.get(url, requestConfig).then(handleResponse);
  }

  return response;
}

function handleResponse(data) {
  const response = data.data;
  //   // console.log("Response:",response)
  //   if (typeof response !== 'object' || response == null) {
  //     return null;
  //   }

  //   // console.log(typeof response)
  //   if (response.ResponseCode !== 20010 && response.ResponseCode !== 20011) {
  //     // if(response.ResponseCode !== 20010){
  //     const e = new Error(response.Message);
  //     e.response = response;
  //     e.responseCode = response.ResponseCode;
  //     e.message = response.Message;
  //     throw e;
  //   }
  return response;
}

function handleResponseGoogle(data) {
  const response = data.data;
  // console.log("Response:",response)
  if (
    response.status !== 'OK' &&
    response.status !== 'ZERO_RESULTS' &&
    response.status !== 'NOT_FOUND'
  ) {
    const e = new Error(response.error_message);
    e.status = response.status;
    throw e;
  }

  return response;
}

export const BaseApi = {
  GET,
  PUT,
  POST,
  DELETE,
  RequestGoogle,
  RequestWithCustomTimeOut,
};
