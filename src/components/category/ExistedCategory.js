import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import axios from 'axios';

const ExistedCategory = () => {
    const {myCategory, addCategory, setMyCategory, ShowCategoryList} = useContext(CategoryContext);

    useEffect(() => {
        ShowCategoryList();
    }, [myCategory]);

    return (
        <div className='flex justify-start items-center h-full px-3'>
            <div className='grid grid-cols-3 gap-y-3 gap-x-6'>
                {myCategory.map((category)=>{
                    return (
                    <div key={category.id} className='flex items-center'>
                        <div style={{ backgroundColor: category.colorCode }} className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                        <div>{category.name}</div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default ExistedCategory;