import {UserDataType, UsersTablePropsType} from "../../../../types/Types";
import {Button, Table} from "antd";
import {repairDate} from "../../../../utils/utilsFunc/repairDate";
import {Key} from "antd/lib/table/interface";

const UsersTable = ({ users, onUserDelete, isFetch } : UsersTablePropsType) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
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
        },
        {
            title: 'Действия',
            dataIndex: 'operation',
            render: (_: any, record: { key: React.Key }) => <Button danger onClick={() => onUserDelete(+record.key)}>Удалить</Button>
        },
    ];

    type UserWithKey = UserDataType & { key: Key }

    const data = users?.items.map((item): UserWithKey  => {
        return(
            {
                id: item.id,
                key: item.key,
                name: item.name,
                role: item.role,
                ctime: repairDate(+item.ctime)
            }
        )
    })
    console.log(users)
    const defaultData = [
        {
            key: '1',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '2',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '3',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '4',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '5',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '6',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '7',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '8',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        },
        {
            key: '9',
            name: 'nikita',
            role: 'nikita',
            ctime: 'repairDate(+item.ctime)'
        }

    ]

    return (
        <Table columns={columns} dataSource={data} pagination={false} loading={isFetch}/>
    )
}

export default UsersTable