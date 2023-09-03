import Title from "antd/es/typography/Title";
import EventTable from "./EventTable";

const EventColumn = () => {
    return (
        <>
            <Title level={2} className='text-center'>Список событий</Title>
            <EventTable/>
        </>

    )
}

export default EventColumn