import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const HeaderModal = ({title, type}) => {
    const { ModalHandler } = useContext(CategoryContext);
    const [ time, setTime ] = useState({
        startTime: '',
        endTime: '',
    })

    const handleTimeChange = (e) =>{
        const { name, value } = e.target;
        setTime(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className="flex justify-between items-center mb-[10px] w-11/12">
            <div className='text-[28px] text-[#383838] font-bold'>{title}</div>
            {(type==='Plan' || type ==='Do')&& <SetPlanTime time={time} setTime={setTime} handleTimeChange={handleTimeChange} />}
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>닫기</ExitBtn>
        </div>
    );
};

export default HeaderModal;

const SetPlanTime = ({time, setTime, handleTimeChange}) => {
    return (
        <div className='flex items-center'>
        <input type="time" name='startTime' value={time.startTime} onChange={(e)=>{handleTimeChange(e)}}/>
        <div className='mx-3'>~</div>
        <input type="time" name='endTime' value={time.endTime} onChange={(e)=>{handleTimeChange(e)}}/>
        </div>

    )
}