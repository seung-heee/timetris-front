import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const HeaderModal = ({type}) => {
    const { ModalHandler, today, timeData } = useContext(CategoryContext);

    return (
        <div className="flex justify-between items-center mb-[10px] w-11/12">
            <div className="flex items-center">
                <div className='text-[28px] text-[#383838] font-bold mr-4'>
                    {(type === 'Do' || type ==='Plan') && today }
                    {type === 'Add' && '카테고리 추가하기' }
                    {type === 'Fix' && '카테고리 수정&삭제하기' }
                </div>
                    {type ==='Do' && <SetPlanTime/>}
                    {type ==='Plan' && 
                    <div className='flex items-center border-[1px] border-[#A8A8A8] p-2 px-4 rounded-[50px]'>
                        <span className="text-2xl text-[#A8A8A8]">{timeData}시</span>
                    </div>}

                </div>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>닫기</ExitBtn>
        </div>
    );
};

export default HeaderModal;

const SetPlanTime = () => {
    const { timeData, setTimeData } = useContext(CategoryContext);

    return (
        <div className='flex items-center border-[1px] border-[#A8A8A8] p-2 px-4 rounded-[50px]'>
        {/* <input type="text" name='startTime' value={time.startTime} onChange={(e)=>{handleTimeChange(e)}}/>
        <div className='mx-3'>~</div>
        <input type="text" name='endTime' value={time.endTime} onChange={(e)=>{handleTimeChange(e)}}/> */}
            <span className='text-2xl text-[#A8A8A8]'>{timeData[0]} ~ {timeData[1]}</span>
        </div>

    )
}