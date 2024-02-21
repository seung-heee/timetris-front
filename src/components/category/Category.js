import React, { useContext, useEffect, useState } from 'react';
import ExistedCategory from './ExistedCategory';
import EmptyCategory from './EmptyCategory';
import { CategoryContext } from '../../context/CategoryContext';

const Category = () => {
    const { ModalHandler } = useContext(CategoryContext);
    const [isCategory, setIsCategory] = useState(true);

    return (
        <div className='w-[500px] h-[236px] bg-[#F6F6F6] rounded-md px-5 pt-5'>
            {/* title */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <span>나의 카테고리</span>
                    <button onClick={()=>{ModalHandler("isAddOpen")}} className='addDiamond origin-center rotate-45 w-[11px] h-[11px] bg-[#888888] ml-2'></button>
                </div>
                <button onClick={()=>{ModalHandler("isFixOpen")}}className='fixSquare w-[14px] h-[14px] bg-[#888888]'></button>
            </div>

            {isCategory ? <ExistedCategory /> : <EmptyCategory />}
        </div>
    );
};

export default Category;