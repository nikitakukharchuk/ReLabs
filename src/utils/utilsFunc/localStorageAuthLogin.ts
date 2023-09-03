import {
    LocalStorageAdd,
    LocalStorageDelete,
    LocalStorageGet
} from "./localStorage";
import {AuthFormType} from "../../types/Types";
import {LOGIN_KEY} from "../constants/Login";

export const localStorageLoginAdd = (loginData: AuthFormType) => {
    LocalStorageAdd(LOGIN_KEY, loginData);
};
export const localStorageLoginGet = () => LocalStorageGet(LOGIN_KEY);
export const localStorageLoginDelete = () => LocalStorageDelete(LOGIN_KEY);