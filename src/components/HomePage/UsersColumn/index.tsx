import {useEffect, useState} from "react";
import {DataTypes, NotificationType} from "../../../types/Types";
import {usersApi} from "../../../services/api/usersListApi";
import {notification, Typography} from "antd";
import UsersTable from "./UsersTable";
import PaginationItem from "./Pagination";
import {mathAllPages} from "../../../utils/utilsFunc/mathAllPages";

const { Title } = Typography

const UsersColumn = () => {
    const [api, contextHolder] = notification.useNotification();
    const [isFetch, setIsFetch] = useState(false);
    const [users, setUsers] = useState<DataTypes | null>(null);

    const openNotificationWithIcon = (type: NotificationType, message : string) => {
        api[type]({
            message: message
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsFetch(true)
                const response = await usersApi.getUsersList();
                console.log(users)
                setUsers(response.data)
                openNotificationWithIcon('success','Все пользователи успешно получены')
                setIsFetch(false)
            } catch (error) {
                openNotificationWithIcon('error','Ошибка ответа от сервера')
                setIsFetch(false)
            }
        };
        fetchData();
    }, []);

    const onRemoveUser = (id: number) => {
        setUsers(prevUsers => {
            if (prevUsers) {
                const updatedUsers = prevUsers.items.filter(user => user.id !== id);
                return {...prevUsers, items: updatedUsers};
            }
            return null;
        });
    };

    const allPages = users?.total && mathAllPages(users.total)

    return (
        <>
            {contextHolder}
             <div>
                    <Title level={2} className='text-center'>Список пользователей</Title>
                    <UsersTable onUserDelete={onRemoveUser} users={users} isFetch={isFetch}/>
                    <PaginationItem  openNotificationWithIcon={openNotificationWithIcon} setData={setUsers} setIsFetch={setIsFetch} total={allPages}/>
             </div>

        </>
    )
}

export default UsersColumn