import {AuthFormType} from "../../types/Types";

export const LocalStorageGet = (key: string) => {
    if (typeof window !== 'undefined') {
        const value = window.localStorage.getItem(key);
        return value || null;
    }
    return null;
};

export const LocalStorageAdd = (key: string, data: AuthFormType) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(data) );
        return true;
    }
    return false;
};

export const LocalStorageDelete = (key: string) => {
    if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
        return true;
    }
    return false;
};