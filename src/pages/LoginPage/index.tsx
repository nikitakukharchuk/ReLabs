import React from "react";
import LoginForm from "../../components/LoginPage/LoginForm";
import {Layout} from "antd";

type LoginPropsType = {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const LoginPage = ({setAuth}: LoginPropsType) => {
    return (
        <Layout>
            <LoginForm setAuth={setAuth}/>
        </Layout>
    )
}
export default LoginPage