import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const HeaderModal = ({type}) => {
    const { ModalHandler, today } = useContext(CategoryContext);
    // const [ time, setTime ] = useState({
    //     startTime: startTime,
    //     endTime: endTime,
    // })

    // const handleTimeChange = (e) =>{
    //     const { name, value } = e.target;
    //     setTime(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // }

    return (
        <div className="flex justify-between items-center mb-[10px] w-11/12">
            <div className='text-[28px] text-[#383838] font-bold'>{today}</div>
            {(type==='Plan' || type ==='Do')&& <SetPlanTime/>}
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>닫기</ExitBtn>
        </div>
    );
};

export default HeaderModal;

const SetPlanTime = () => {
    const { timeData, setTimeData } = useContext(CategoryContext);

    return (
        <div className='flex items-center'>
        {/* <input type="text" name='startTime' value={time.startTime} onChange={(e)=>{handleTimeChange(e)}}/>
        <div className='mx-3'>~</div>
        <input type="text" name='endTime' value={time.endTime} onChange={(e)=>{handleTimeChange(e)}}/> */}
        <span className='text-2xl'>{timeData[0]} ~ {timeData[1]}</span>
        </div>

    )
}