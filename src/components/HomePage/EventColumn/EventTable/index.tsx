import React from "react";
import {useWebSocket} from "../../../WebSocket";
import { useWhyDidYouUpdate } from "ahooks";
import {repairDate} from "../../../../utils/utilsFunc/repairDate";
import {Table} from "antd";

const columns = [
    {
        title: 'Событие',
        dataIndex: 'event'
    },
    {
        title: 'Время',
        dataIndex: 'ctime',
        render: (ctime : number) => repairDate(ctime)
    }
]

const EventTable = () => {

    const webSocketContext = useWebSocket();

    useWhyDidYouUpdate('EventTable', {webSocketContext});
    return (
        <Table pagination={{position:['bottomCenter']}} columns={columns} dataSource={webSocketContext?.events}/>

    )
}

export default EventTable
