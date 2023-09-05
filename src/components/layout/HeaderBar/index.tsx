import React, { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import RoutePath from '../../../utils/constants/Route';
import { localStorageLoginDelete } from '../../../utils/utilsFunc/localStorageAuthLogin';

const { Header } = Layout;

type HeaderBarProps = {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const itemsMenu = [
  {
    label: <NavLink to={'/'}>Главная</NavLink>,
    key: '1',
  },
  {
    label: <NavLink to={'/online-store'}>Магазин</NavLink>,
    key: '2',
  },
];

const HeaderBar = ({ setAuth }: HeaderBarProps) => {
  const routeNavigate = useNavigate();
  const [current, setCurrent] = useState('1');

  useEffect(() => {
    const savedCurrent = localStorage.getItem('current');
    if (savedCurrent) {
      setCurrent(savedCurrent);
    }
  }, []);

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  const handleLogout = () => {
    localStorageLoginDelete();
    setAuth(false);
    routeNavigate(RoutePath.LOGIN_PAGE);
  };

  useEffect(() => {
    localStorage.setItem('current', current);
  }, [current]);

  return (
    <Header>
      <div className='flex justify-between w-full items-center'>
        <Menu
          className='w-52'
          onClick={onClick}
          selectedKeys={[current]}
          theme='dark'
          mode='horizontal'
          items={itemsMenu}
        />
        <Dropdown menu={{ items: [{ key: '1', label: <Button onClick={handleLogout}>Выйти</Button> }] }} placement='bottom'>
          <Avatar size='large' icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderBar;
