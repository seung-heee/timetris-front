import React, { useContext, useState } from 'react';
import HeaderModal from './ModalElement/HeaderModal';
import FooterModal from './ModalElement/FooterModal';
import SelectedCategory from './ModalElement/SelectedCategory';
import { CategoryContext } from '../../../context/CategoryContext';
import axios from 'axios';

const AddModal = () => {
    const {state, ModalHandler} = useContext(CategoryContext);
    const [addCategory, setAddCategory]= useState({
        name: "",
        colorCode: ""
    })

    const HandleAddCategory = async () => {
        try {
            console.log(addCategory);

            // const response = await axios.post('url/category', addCategory);
            // const addData = response.data;
            // 카테고리 목록에 추가

            // 추가한 카테고리 이름, colorCode 초기화
            setAddCategory({
                name: '',
                colorCode: '',
            })
            
        } catch(error) {
            console.log('에러:', error)
        }
        
    }

    return (
        <>
        <button onClick={()=>{ModalHandler("isAddOpen")}}>카테고리 추가하기</button>
        {state.isAddOpen ? 
            <button onClick={()=>{ModalHandler("isAddOpen")}} className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <button onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal title={'새로운 카테고리 추가하기'} type={"Add"}/>
                    <SelectedCategory type={'Add'} addCategory={addCategory} setAddCategory={setAddCategory} HandleAddCategory={HandleAddCategory} />
                    <FooterModal type={'Add'} HandleAddCategory={HandleAddCategory}/>
                </button>
            </button>
            : null
        }
        </>
    );
};

export default AddModal;