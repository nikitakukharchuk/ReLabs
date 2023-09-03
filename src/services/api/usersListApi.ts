import {instance} from "./instance/instance";
import {DataTypes} from "../../types/Types";

export const usersApi = {
    getUsersList: (offset?: number) => {
        const url : string = offset !== undefined ? `/list?offset=${offset}` : '/list';
        return instance.get<DataTypes>(url);
    }
}