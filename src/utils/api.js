import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../settings/constants";
import { getAccessToken } from "./auth";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const _get = (endpoint, successCallback, errorCallback) => {
  myFetch("GET", endpoint, undefined, successCallback, errorCallback);
};
export const _put = (endpoint, body, successCallback, errorCallback) => {
  myFetch("PUT", endpoint, body, successCallback, errorCallback);
};
export const _post = (endpoint, body, successCallback, errorCallback) => {
  myFetch("POST", endpoint, body, successCallback, errorCallback);
};
export const _delete = (endpoint, body, successCallback, errorCallback) => {
  myFetch("DELETE", endpoint, body, successCallback, errorCallback);
};

const myFetch = (method, endpoint, body, successCallback, errorCallback) => {
  const url = API + endpoint;

  let headers = defaultHeaders;
  headers["Authorization"] = "bearer " + getAccessToken();

  let response = null;

  if (body === undefined) {
    response = { url, method, headers };
  } else {
    response = { url, method, headers, body };
  }

  handleResponse(response, successCallback, errorCallback);
};

const handleResponse = (response, successCallback, errorCallback) => {
  axios(response)
    .then((result) => {
      if (successCallback) {
        successCallback(result);
      } else {
        toast.success("Success");
      }
    })
    .catch((error) => {
      if (errorCallback) {
        errorCallback(error);
      } else {
        toast.success("Error");
      }
    });
};
