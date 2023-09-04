import {UserDataType, UsersTablePropsType} from "../../../../types/Types";
import {Button, Table} from "antd";
import {repairDate} from "../../../../utils/utilsFunc/repairDate";

const UsersTable = ({ users, onUserDelete, isFetch } : UsersTablePropsType) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'key',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Роль',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Дата создания',
            dataIndex: 'ctime',
            key: 'ctime',
            render: (record : number) => repairDate(record)
        },    
        {
            title: 'Действия',
            dataIndex: 'operation',
            render: (_: any, record : UserDataType) => <Button danger onClick={() => {
                onUserDelete(record.id)
            }
            }>Удалить</Button>
        },
    ];

    type UserWithKey = UserDataType & { key: React.Key }

    const data = users?.items.map((item): UserWithKey  => {
        return(
            {
                id: item.id,
                key: item.id,
                name: item.name,
                role: item.role,
                ctime: item.ctime
            }
        )
    })

    return (
        <Table columns={columns} dataSource={data} pagination={false} loading={isFetch}/>
    )
}

export default UsersTable