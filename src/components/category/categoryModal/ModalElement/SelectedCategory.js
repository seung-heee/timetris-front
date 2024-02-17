import React, { useContext } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const SelectedCategory = () => {
    const { categoryInfo, ModalHandler } = useContext(CategoryContext);

    return (
        <div className='flex flex-col justify-start w-10/12 flex-grow'>
            <input type="text" placeholder='카테고리 이름'
            className='flex justify-between w-full mb-[30px] pb-[3px] border-solid border-b-[1px] border-[#cfcfcf]' />
            
            <div className='flex flex-col justify-between w-full'>
                <div className='text-[16px] text-start'>색상 선택</div>
                <div className='flex items-center'>
                {categoryInfo.map((category)=>{
                    return (
                        <button style={{ backgroundColor: category.colorCode }} className={`w-[45px] h-[45px] rounded-[50px] mr-3 my-5`}></button>
                    )
                })}
                </div>
                <ExitBtn className='self-end' onClick={()=>{ModalHandler("isAddOpen")}}>카테고리 추가</ExitBtn>
            </div>
        </div>
    );
};

export default SelectedCategory;