import React, { useContext, useState } from 'react';
import HeaderModal from './ModalElement/HeaderModal';
import FooterModal from './ModalElement/FooterModal';
import SelectedCategory from './ModalElement/SelectedCategory';
import { CategoryContext } from '../../../context/CategoryContext';

const AddModal = () => {
    const {state, ModalHandler} = useContext(CategoryContext);

    return (
        <>
        {state.isAddOpen ? 
            <button onClick={()=>{ModalHandler("isAddOpen")}} className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <button onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal title={'새로운 카테고리 추가하기'} type={"Add"}/>
                    <SelectedCategory type={'AddModal'} />
                    <FooterModal type={'Add'} />
                </button>
            </button>
            : null
        }
        </>
    );
};

export default AddModal;