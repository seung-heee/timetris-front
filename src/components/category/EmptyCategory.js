import React, { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

const EmptyCategory = () => {
    const {ModalHandler} = useContext(CategoryContext);
    
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='mb-3 text-center'>
                아직 카테고리가 없으시네요.<br/>
                카테고리를 추가하고 편하게 기록해보세요!
            </div>
            <button onClick={()=>{ModalHandler("isAddOpen")}} className='bg-[#E4E4E4] w-[123px] py-2 rounded-3xl'>추가하기</button>
        </div>
    );
};

export default EmptyCategory;