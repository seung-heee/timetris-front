import React, { useContext } from 'react';
import { CategoryContext } from '../../../context/CategoryContext';
import HeaderModal from './ModalElement/HeaderModal';
import CategoryListBox from './ModalElement/CategoryListBox';
import SelectedCategory from './ModalElement/SelectedCategory';
import FooterModal from './ModalElement/FooterModal';
import InputEle from './ModalElement/InputEle';

const PlanModal = () => {
    const { state, ModalHandler } = useContext(CategoryContext);

    return (
        <>
        <button onClick={()=>{ModalHandler("isPlanOpen")}}>PLAN 클릭</button>

        {state.isPlanOpen ? 
            <button onClick={()=>{ModalHandler("isPlanOpen")}} className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <button onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal title={'Plan 선택한 날짜'} type={'Plan'} />
                    <InputEle type={'Plan'} />
                    <div className='flex justify-between w-11/12 items-center'>
                        <CategoryListBox text={'카테고리를 선택해주세요.'}/>
                        <SelectedCategory inputText={'이곳에 할 일(Plan)을 적어주세요.'} />
                    </div>
                    <FooterModal type={'Plan'} />
                </button>
            </button>
            : null
        }
        </>
    );
};

export default PlanModal;