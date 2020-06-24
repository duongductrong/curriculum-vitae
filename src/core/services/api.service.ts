/**
 *
 * Warn: how to install packages ?
 * -> npm i --save react-toastify axios
 * 
 */

import axios from "axios";
import jwtService from "./jwt.service";
import toast from "../configs/toast.config";

import { NoticeClient } from "./types/types";

class ApiService {

    httpHeadersConfig: Object | any | null | undefined;

    constructor() {
        this.httpHeadersConfig = {
            headers: {
                Authorization: `BEARER ${jwtService.getToken()}`
            }
        };
    }

    /**
     * Get request
     * @param {String} url The url using call api
     * @param {Boolean} notice Show modal message
     * @param {*} config The configs instance headers, etc
     */
    get(url: string, notice: NoticeClient = { success: false, error: false }, { ...config } = {} = {}) {
        return new Promise((resolve, reject) => {
            return axios({
                url: url,
                ...config,
                ...this.httpHeadersConfig
            })
                .then(response => {
                    if (notice.success) this.process({ type: "success", text: "The proccess successfully" });

                    resolve(response.data);
                })
                .catch(({ response }) => {
                    if (notice.error) this.process({ type: "error", text: "Oop! You have few issues here" });

                    reject(response);
                });
        });
    }

    /**
     * Post request
     * @param {String} url The url using call api
     * @param {Object} data The data submit
     * @param {Boolean} notice Show modal message
     * @param {*} config The configs instance headers, etc
     */
    post(url: string, data: any, notice: NoticeClient = { success: false, error: false }, { ...config } = {}) {
        return new Promise((resolve, reject) => {
            return axios({
                url: url,
                data: { ...data },
                ...config,
                ...this.httpHeadersConfig
            })
                .then(response => {
                    if (notice) this.process({ type: "success", text: "The proccess successfully" });

                    resolve(response.data);
                })
                .catch(({ response }) => {
                    if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
                    reject(response);
                });
        });
    }

    /**
     * 
     * @param {String} url The url call api
     * @param {Object} data The data submit 
     * @param {Boolean} notice Show modal message 
     * @param {*} config th configs instance headers, etc
     */
    put(url: string, data: any, notice: NoticeClient = { success: false, error: false }, { ...config } = {}) {
        return new Promise((resolve, reject) => {
            return axios({
                url,
                data: { ...data },
                ...config,
                ...this.httpHeadersConfig
            })
                .then(response => {
                    if (notice) this.process({ type: "success", text: "The proccess successfully" });

                    resolve(response.data);
                })
                .catch(({ response }) => {
                    if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
                    reject(response);
                });
        });
    }

    /**
     * 
     * @param {String} url The url call api
     * @param {Object} data The data submit 
     * @param {Boolean} notice Show modal message 
     * @param {*} config th configs instance headers, etc
     */
    patch(url: string, data: any, notice: NoticeClient = { success: false, error: false }, { ...config } = {}) {
        return new Promise((resolve, reject) => {
            return axios({
                url,
                data: { ...data },
                ...config,
                ...this.httpHeadersConfig
            })
                .then(response => {
                    if (notice) this.process({ type: "success", text: "The proccess successfully" });

                    resolve(response.data);
                })
                .catch(({ response }) => {
                    if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
                    reject(response);
                });
        });
    }

    /**
     * 
     * @param {String} url The url call api
     * @param {Object} data The data submit 
     * @param {Boolean} notice Show modal message 
     * @param {*} config th configs instance headers, etc
     */
    delete(url: string, data: any, notice: NoticeClient = { success: false, error: false }, { ...config } = {}) {
        return new Promise((resolve, reject) => {
            return axios({
                url,
                data: { ...data },
                ...config,
                ...this.httpHeadersConfig
            })
                .then(response => {
                    if (notice) this.process({ type: "success", text: "The proccess successfully" });

                    resolve(response.data);
                })
                .catch(({ response }) => {
                    if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
                    reject(response);
                });
        });
    }

    /**
     * Process message notice
     * @param {String} type The type of message (success | warn | error | info)
     * @param {String} text The text need notice
     */
    process({ type, text }: { type: string; text: string; }) {
        switch (type) {
            case "success":
                toast.success(text || "Yehh, Successfully");
                break;
            case "error":
                toast.error(text || "~Oop! Something went is wrong !");
                break;
            case "info":
                toast.info(text || "You have a new notification");
                break;
            case "warn":
                toast.warn(text || "Warn! Issue warnings");
                break;
            default:
                toast.default(text);
        }
    }
}

export default new ApiService();
