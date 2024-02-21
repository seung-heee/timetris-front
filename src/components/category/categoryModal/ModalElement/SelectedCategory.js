import React, { useContext } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';
import { ExitBtn } from './FooterModal';

const SelectedCategory = ({type}) => {
    const { HandleAddCategory, selectColorCode, addCategory, setAddCategory, myCategory } = useContext(CategoryContext);

    return (
        <>
        <div className='flex flex-col justify-start w-10/12 flex-grow'>
            <input type="text" placeholder='카테고리 이름' value={addCategory.name} onChange={(e)=>{
                setAddCategory(prevState => ({
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
                    .map((colorCode, idx)=>{
                    return (
                        <button 
                        key={colorCode+idx} 
                        value={colorCode} 
                        onClick={(e)=>{
                            setAddCategory(prevState => ({
                                ...prevState,
                                colorCode: e.target.value
                              }));
                            }
                        }
                            style={{ backgroundColor: colorCode }} 
                            className={`w-[45px] h-[45px] rounded-[50px] mr-2 my-1
                                ${colorCode === addCategory.colorCode ? 'w-[50px] h-[50px]' : ''} `}>
                        </button>
                    )
                })}
                </div>
                {type !== 'AddModal' &&
                <ExitBtn className='self-end' onClick={()=>{
                    const isAddNameExists = myCategory.some(category => category.name === addCategory.name);
                    if (addCategory.name === '' || addCategory.colorCode==='') {
                        alert('추가할 카테고리 이름 또는 색상 코드를 입력하세요.');
                    } else if (isAddNameExists) {
                        alert('이미 존재하는 카테고리로 추가할 수 없습니다.');
                    } else {
                        HandleAddCategory('Add')
                    }
                    }}>카테고리 추가</ExitBtn>}
            </div>
        </div>
    </>
    );
};

export default SelectedCategory;