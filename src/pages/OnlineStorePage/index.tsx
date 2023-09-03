import {Space} from "antd";
import {OnlineStoreData} from "../../services/Mocs/OnlineStoreData";
import StoreItem from "./StoreItem";
import {localStorageLoginGet} from "../../utils/utilsFunc/localStorageAuthLogin";
import {Navigate} from "react-router-dom";
import RoutePath from "../../utils/constants/Route";
import React from "react";

const OnlineStorePage = () => {
    const login = localStorageLoginGet()
    if (!login) {
        return <Navigate to={RoutePath.LOGIN_PAGE}/>
    }
    return (
        <Space size={30} className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto px-20'>
            {OnlineStoreData.map((item) => {
                return(
                    <StoreItem key={item.id} image={item.image} lastPrice={item.lastPrice} newPrice={item.newPrice} discountPrice={item.discountPrice} tags={item.tags}/>
                )
            })}
        </Space>
    )
}

export default OnlineStorePage