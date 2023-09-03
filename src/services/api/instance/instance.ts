import axios, {AxiosInstance} from "axios";

export const API_URL : string = "https://test.relabs.ru/api/users";

export const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
});
