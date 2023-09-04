import {localStorageLoginGet} from "../../utils/utilsFunc/localStorageAuthLogin";
import RoutePath from "../../utils/constants/Route";
import {Navigate} from "react-router-dom";
import UsersColumn from "../../components/HomePage/UsersColumn";
import EventColumn from "../../components/HomePage/EventColumn";
import {Col} from "antd";

const HomePage = () => {
    const login = localStorageLoginGet()
    if (!login) {
        return <Navigate to={RoutePath.LOGIN_PAGE}/>
    }

    return (
        <div className='flex p-5 gap-10 xl:flex-row sm:flex-col w-full'>
            <div className="xl:w-2/4 sm:w-full"><UsersColumn/></div>
            <Col className="xl:w-2/4 sm:w-full"><EventColumn/></Col>
        </div>
    )
}

export default HomePage