import {StoreDataType} from "../../../types/Types";
import {Badge, Checkbox, Image, Rate, Space} from "antd";
import { HeartFilled , HeartTwoTone } from '@ant-design/icons';
import React, {useState} from "react";
import {StoreRating} from "../../../utils/constants/Store/StoreItem";

const StoreItem = ({ image, newPrice, lastPrice, discountPrice, tags }: StoreDataType) => {
    const [value, setValue] = useState(3);
    const [isCheck, setIsCheck] = useState(false);

    return (
        <Space direction={'vertical'} className='w-fit rounded-2xl bg-white px-4 py-2 shadow-black drop-shadow-lg '>
            <div className='relative group'>
                <Image src={image} preview={false}/>
                <div className='bg-white/70 absolute px-3 py-2 top-2/4 left-2/4 -translate-x-2/4 rounded-2xl opacity-0 transition-all group-hover:opacity-100 cursor-pointer hover:bg-white/90 hover:scale-[1.1] text-sm'>Смотреть</div>
                <div className='absolute left-5 bottom-5'>
                    <Badge count={'-14%'} offset={[-15, 35]}>
                        <div className='px-[7px] py-[5px] bg-gray-400/70 rounded-lg'><Checkbox/></div>
                    </Badge>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='text-2xl font-bold'>{newPrice} ₽</div>
                <div className='text-2xl text-gray-500 line-through font-bold'>{lastPrice} ₽</div>
            </div>
            <div className={`text-xl font-bold text-[#cb11ab]`}>{discountPrice} ₽</div>
            <div className='text-sm text-gray-500'>{tags}</div>
            <div>
                <Rate tooltips={StoreRating} onChange={setValue} value={value} style={{color:'#cb11ab'}}/>
                {value ? <span className="ant-rate-text">{StoreRating[value - 1]}</span> : ''}
            </div>
            <button className='transition-all uppercase bg-gradient-to-r from-green-200 to-yellow-200 hover:from-green-400 hover:to-yellow-400 px-5 py-3 rounded-3xl'>рассрочка 0-0-6</button>
            <Space direction={'horizontal'} size={10}>
                <button className='transition-all bg-[#cb11ab] hover:bg-pink-700 px-3 py-2 rounded-xl text-sm font-bold text-white'>В корзину</button>
                <Rate character={isCheck ? <HeartFilled/> : <HeartTwoTone twoToneColor="#eb2f96" />} style={{ color: '#cb11ab' }}  count={1} onChange={() => setIsCheck(true)}/>
            </Space>

        </Space>
    )
}

export default StoreItem