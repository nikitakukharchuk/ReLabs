import React, { useEffect, useState } from "react";
import { repairDate } from "../../../../utils/utilsFunc/repairDate";
import { Table } from "antd";
import { EventType } from "../../../../types/Types";
import { v1 } from "uuid";
import useWebSocket from "react-use-websocket";

const columns = [
  {
    title: "Событие",
    dataIndex: "event",
  },
  {
    title: "Время",
    dataIndex: "ctime",
    render: (ctime: number) => repairDate(ctime),
  },
];

const EventTable = () => {
  const [data, setData] = useState<EventType[] | never>([]);
  const { lastJsonMessage } = useWebSocket<EventType>("wss://test.relabs.ru/event", {
    onOpen: () => console.log("socket-connected"),
    onClose(event) {
        console.log("socket-stop")
    },
    shouldReconnect: (closeEvent) => true,
  });
  useEffect(() => {
    lastJsonMessage && setData([
      ...data,
      {
        key: v1(),
        event: lastJsonMessage.event,
        ctime: lastJsonMessage.ctime,
      },
    ]);
  }, [lastJsonMessage]);
  
  

  return (
    <Table
      pagination={{ position: ["bottomCenter"] }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default EventTable;
