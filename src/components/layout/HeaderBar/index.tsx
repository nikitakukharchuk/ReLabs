import React, { useState } from 'react';
import {Layout, Menu, Avatar, Dropdown, Typography, Space} from 'antd';
import type { MenuProps } from "antd";
import {
    UserOutlined,
} from '@ant-design/icons';
import {NavLink, useNavigate} from 'react-router-dom';
import RoutePath from "../../../utils/constants/Route";
import {localStorageLoginDelete} from "../../../utils/utilsFunc/localStorageAuthLogin";
import {useWebSocket} from "../../WebSocket";

const { Header } = Layout;

type HeaderBarProps = {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const items: MenuProps['items'] = [
    {
        label: (
            <NavLink to={'/'}>Главная</NavLink>
        ),
        key: 'home'
    },
    {
        label: (
            <NavLink to={'/online-store'}>Магазин</NavLink>
        ),
        key: 'store'
    },
];

const HeaderBar = ({ setAuth } : HeaderBarProps) => {
    const routeNavigate = useNavigate();
    const [current, setCurrent] = useState('home');
    const webSocketContext = useWebSocket();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = () => {
        localStorageLoginDelete();
        setAuth(false);
        routeNavigate(RoutePath.LOGIN_PAGE)
        if (webSocketContext && webSocketContext.socket) {
            webSocketContext.socketClose();
        }
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
                <Typography.Text>{'Выйти'}</Typography.Text>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header>
            <Space className='justify-between w-full'>
                <Menu className='w-52' onClick={onClick} selectedKeys={[current]} theme='dark' mode="horizontal" items={items}/>
                <Dropdown overlay={userMenu} placement="bottom" className='grow'>
                    <Avatar size='large' icon={<UserOutlined />} />
                </Dropdown>
            </Space>
        </Header>
    );
};

export default HeaderBar;
