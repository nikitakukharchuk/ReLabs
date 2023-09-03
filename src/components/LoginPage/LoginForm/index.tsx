import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {AuthFormType} from "../../../types/Types";
import {localStorageLoginAdd} from "../../../utils/utilsFunc/localStorageAuthLogin";
import RoutePath from "../../../utils/constants/Route";
import {Button, Input, Layout, Progress, Space, Typography} from "antd";

const { Text, Title } = Typography

type LoginFormPropsType = {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = ({setAuth}: LoginFormPropsType) => {
    const [isFetch, setIsFetch] = useState(false);
    const routeNavigate = useNavigate();
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };


    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthFormType>();



    const onSubmit: SubmitHandler<AuthFormType> = (data) => {
        setIsFetch(true);
        localStorageLoginAdd(data)
        setTimeout(() => {
            setIsFetch(false)
            setAuth(true)
            routeNavigate(RoutePath.HOME_PAGE)
        }, 2000)
    };

    const validatePassword = (value: string) => {
        if (!/(?=.*[A-Z])/.test(value)) {
            return 'Добавьте одну большую букву';
        }
        if (/\s/.test(value)) {
            return 'Пароль не может содержать пробелы';
        }
        return true;
    };

    return (
        <Space className='h-screen bg-white flex justify-center p-10'>
            <div className='py-10 px-32 shadow-2xl rounded-2xl '>
            <Title level={2}>Авторизация</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Space size={15} direction='vertical'>
                <Space direction='vertical' className='input-group' style={{ width: '100%' }}>
                    <label className='label'>Электронная почта :</label>
                    <Controller
                        render={({field}) => (
                            <Input {...field} status={errors?.email && 'error'} placeholder='example@email.com' disabled={isFetch} />
                        )}
                        name='email'
                        control={control}
                        defaultValue=''
                        rules={{ required: { value: true, message: 'Введите email' }, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Введите корректный email'} }}
                    />
                    {errors.email && (
                        <Text type='danger'>{errors.email.message}</Text>
                    )}
                </Space>
                <Space direction='vertical' className='input-group'>
                    <label className='label'>Пароль</label>
                    <Controller
                        render={({field}) => (
                            <Input.Password {...field} status={errors?.password && 'error'} placeholder='Введите пароль' disabled={isFetch}/>
                        )}
                        name='password'
                        control={control}
                        defaultValue=''
                        rules={{ required: { value: true, message: 'Введите пароль' }, validate: validatePassword, minLength: { value: 8, message: 'Минимум 8 символов' } }}
                    />
                    {errors.password && (
                        <Text type='danger' className='w-1/2 flex-wrap'>{errors.password.message}</Text>
                    )}
                </Space>
                <Button className='bg-white text-blue-400 border-blue-400 rounded' type='primary' htmlType='submit' loading={isFetch && loadings[0]} onClick={() => enterLoading(0)}>
                    Авторизация
                </Button>
                </Space>
            </form>
        </div>
        </Space>
    )
}

export default LoginForm