import React, { useContext } from 'react';
import CategoryListBox from './ModalElement/CategoryListBox';
import { CategoryContext } from '../../../context/CategoryContext';
import HeaderModal from './ModalElement/HeaderModal';
import FooterModal from './ModalElement/FooterModal';
import SelectedCategory from './ModalElement/SelectedCategory';

const FixModal = () => {
    const { state, ModalHandler } = useContext(CategoryContext);

    return (
        <>
        <button onClick={()=>{ModalHandler("isFixOpen")}}>카테고리 수정</button>
        {state.isFixOpen ? 
            <button onClick={()=>{ModalHandler("isFixOpen")}} className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <button onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal title={'나의 카테고리'} type={'Fix'} />
                    <div className='flex justify-between w-11/12 items-center'>
                        <CategoryListBox text={'수정할 카테고리를 선택해주세요.'}/>
                        <SelectedCategory />
                    </div>
                    <FooterModal type={'Fix'} />
                </button>
            </button>
            : null
        }
        </>
    );
};

export default FixModal;