import {localStorageLoginGet} from "../../utils/utilsFunc/localStorageAuthLogin";
import RoutePath from "../../utils/constants/Route";
import {Navigate} from "react-router-dom";
import UsersColumn from "../../components/HomePage/UsersColumn";
import EventColumn from "../../components/HomePage/EventColumn";
import {Col, Row} from "antd";
import React, {useEffect} from "react";
import { useWebSocket } from "../../components/WebSocket";

const HomePage = () => {
    const login = localStorageLoginGet()
    const webSocketContext = useWebSocket();

    useEffect(() => {
        if (webSocketContext && !webSocketContext.socket) {
            webSocketContext.socketOn();
        }
    }, [webSocketContext]);
    if (!login) {
        return <Navigate to={RoutePath.LOGIN_PAGE}/>
    }

    return (
        <Row className='p-5' gutter={32}>
            <Col span={12}><UsersColumn/></Col>
            <Col span={12}><EventColumn/></Col>
        </Row>
    )
}

export default HomePage