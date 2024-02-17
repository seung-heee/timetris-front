import React, { useContext } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const HeaderModal = () => {
    const { openModalHandler } = useContext(CategoryContext);

    return (
        <div className="flex justify-between items-center mb-[10px] w-11/12">
            <div className='text-[28px] text-[#383838] font-bold'>새로운 카테고리 추가하기</div>
            <ExitBtn onClick={openModalHandler}>닫기</ExitBtn>
        </div>
    );
};

export default HeaderModal;