import React, { useContext } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const HeaderModal = ({title, type}) => {
    const { ModalHandler } = useContext(CategoryContext);

    return (
        <div className="flex justify-between items-center mb-[10px] w-11/12">
            <div className='text-[28px] text-[#383838] font-bold'>{title}</div>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>닫기</ExitBtn>
        </div>
    );
};

export default HeaderModal;