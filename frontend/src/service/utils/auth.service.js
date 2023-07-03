import axios from "axios";
import {API} from "./api.constant.js";

const authService = {
    login: function (data) {
        return axios.post(API.baseUrl + API.auth.login, data, {withCredentials: true, credentials: "include"});
    },
    registration: function (data) {
        return axios.post(API.baseUrl + API.auth.registration, data, {
            headers: {"Content-Type": "multipart/form-data"}
        })
    },
    activate: function (data) {
        return axios.post(API.baseUrl + API.auth.activate, data)
    }
}

export default authService;