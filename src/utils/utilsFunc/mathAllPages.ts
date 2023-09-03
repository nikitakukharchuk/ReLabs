import {PaginationLimit} from "../constants/Pagination";


export const mathAllPages = (totalUsers: number) => {
    return Math.ceil(totalUsers / PaginationLimit.limit);
};