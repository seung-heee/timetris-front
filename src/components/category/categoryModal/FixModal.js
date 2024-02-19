import React, { useContext, useEffect, useState } from 'react';
import CategoryListBox from './ModalElement/CategoryListBox';
import { CategoryContext } from '../../../context/CategoryContext';
import HeaderModal from './ModalElement/HeaderModal';
import FooterModal, { ExitBtn } from './ModalElement/FooterModal';
import SelectedCategory from './ModalElement/SelectedCategory';
import { BsTrash3 } from "react-icons/bs";
import axios from 'axios';

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
                        <CategoryFixList />
                        <SelectedFixCategory />
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

const CategoryFixList = () => {
    const {categoryInfo, addCategory, setAddCategory, fixCategory, setFixCategory, categoryId, setCategoryId, HandleAddCategory, myCategory, setMyCategory, ShowCategoryList} = useContext(CategoryContext);

    useEffect(() => {
        ShowCategoryList(); // 나의 카테고리 조회
    }, [])

    return (
        <div className='flex flex-col justify-between w-[40%] mr-10 text-start'>
            <div className='mb-3'>수정할 카테고리를 선택해주세요</div>
            <div className="bg-[#f1f1f1] p-[20px] h-[280px] rounded-[20px]">
                {myCategory.map((myCategory)=>{
                    return (
                    <button key={myCategory.id}
                        // 카테고리 pick
                        onClick={()=>{
                            setCategoryId(myCategory.id)
                            setFixCategory(prevState => ({
                                ...prevState,
                                name: myCategory.name
                            }));
                        }}
                        className={`flex items-center mb-1 w-full
                        ${categoryId === myCategory.id?
                        'bg-[#E4E4E4] py-[0.8px] pl-1'
                        :''}`}>
                        <div style={{ backgroundColor: myCategory.colorCode }} className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                        <div className='flex justify-between items-center grow'>
                            <div>{myCategory.name}</div>
                            {categoryId === myCategory.id ? 
                            <BsTrash3 size={15} onClick={()=>{
                                HandleAddCategory("Delete")
                            }} /> 
                            : ''}
                        </div>
                    </button>)
                })}
            </div>
        </div>
    );
};


const SelectedFixCategory = ({type}) => {
    const { HandleAddCategory, myCategory, categoryInfo, selectColorCode, addCategory, categoryId, setCategoryId, setAddCategory, fixCategory, setFixCategory } = useContext(CategoryContext);

    return (
        <>
        <div className='flex flex-col justify-start w-10/12 flex-grow'>
            <input type="text" placeholder='카테고리 이름' value={fixCategory.name} onChange={(e)=>{
                // 수정된 카테고리 이름 업데이트
                setFixCategory(prevState => ({
                    ...prevState,
                    name: e.target.value,
                }));
            }}
            className='flex justify-between w-full mb-[30px] pb-[3px] border-solid border-b-[1px] border-[#cfcfcf]' />
            
            <div className='flex flex-col justify-between w-full'>
                <div className='text-[16px] text-start'>색상 선택</div>
                <div className='flex items-center flex-wrap my-4'>
                {selectColorCode
                    .filter(colorCode => !myCategory.some(category => category.colorCode === colorCode))
                    .map((colorCode)=>{
                    return (
                        <button value={colorCode} onClick={(e)=>{
                            // 수정된 카테고리 색상 업데이트
                            setFixCategory(prevState => ({
                                ...prevState,
                                colorCode: e.target.value
                              }));
                        }}
                            style={{ backgroundColor: colorCode }} 
                            className={`w-[45px] h-[45px] rounded-[50px] mr-2 my-1`}></button>
                    )
                })}
                </div>
                {type !== 'AddModal' && <ExitBtn className='self-end' onClick={()=>{HandleAddCategory(type)}}>카테고리 추가</ExitBtn>}
            </div>
        </div>
    </>
    );
};
