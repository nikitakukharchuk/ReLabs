import React, { useEffect } from "react";
import {useWebSocket} from "../../../WebSocket";
import { useWhyDidYouUpdate } from "ahooks";
import {repairDate} from "../../../../utils/utilsFunc/repairDate";
import {Table} from "antd";
import { EventType } from "../../../../types/Types";
import { v1 } from "uuid";

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

    useEffect(() => {
        if (webSocketContext && !webSocketContext.socket) {
            webSocketContext.socketOn();
        }
    }, [webSocketContext]);

    type EventWithKey = EventType & { key: React.Key }

    const data = webSocketContext?.events.map((item): EventWithKey  => {
        return(
            {
                key: v1(),
                event: item.event,
                ctime: item.ctime
            }
        )
    })

    useWhyDidYouUpdate('EventTable', {webSocketContext});
    return (
        <Table pagination={{position:['bottomCenter']}} columns={columns} dataSource={data}/>

    )
}

export default EventTable
