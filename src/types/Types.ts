import {Key} from "antd/lib/table/interface";

export type DataTypes = {
    total: number,
    per_page: number,
    page: number,
    limit: number,
    offset: number,
    items: Array<UserDataType>

}

export type UserDataType = {
    id: number,
    key: Key,
    name: string,
    role: string,
    ctime: string
}

export type AuthFormType = {
    email: string,
    password: string
}

export type RouteType = {
    HOME_PAGE: string,
    LOGIN_PAGE: string,
    ONLINE_STORE_PAGE: string,
    ERROR_PAGE: string
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type UsersTablePropsType = {
    users: DataTypes | null
    onUserDelete: (id: number) => void
    isFetch: boolean
}

export type StoreDataType = {
    id?: string,
    image: string,
    lastPrice: string,
    newPrice: string,
    discountPrice: string,
    tags: string,

}

export type EventType =  {
    ctime: string;
    event: string;
}