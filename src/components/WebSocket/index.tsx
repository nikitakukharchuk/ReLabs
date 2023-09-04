import React, {createContext, useContext, useEffect, useState} from 'react';
import {EventType} from "../../types/Types";

const WEBSOCKET_URL = 'wss://test.relabs.ru/event'

export type WebSocketContextProps = {
    events: EventType[];
    socketOn: () => void;
    socketClose: () => void;
    socket: WebSocket | null;
    errorMessage:string
}
export const webSocketContext = createContext<WebSocketContextProps | undefined>(undefined)
export const useWebSocket = () => {
    return useContext(webSocketContext)
}
export const WebSocketProvider = ({children}: { children: React.ReactNode }) => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [errorMessage, serErrorMessage] = useState('');
    const [socket, setSocket] = useState<any>(null)

    const socketOn = () => {
        setSocket(new WebSocket(WEBSOCKET_URL))
    }
    const socketClose = () => {
        socket.close();
        setSocket(null)
        setEvents([])
    }

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event: any) => {
                const data = JSON.parse(event.data);
                setEvents(prevState => [data, ...prevState]);
            };
            socket.onerror = () => {

                serErrorMessage('Ошибка')
            };
        }

    }, [socket]);

    const value: WebSocketContextProps = {
        events,
        socketOn,
        socketClose,
        socket,
        errorMessage
    }

    return (
        <webSocketContext.Provider value={value}>
            {children}
        </webSocketContext.Provider>
    );
};