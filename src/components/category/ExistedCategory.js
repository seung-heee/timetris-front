import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import axios from 'axios';

const ExistedCategory = () => {
    const {myCategory, addCategory, setMyCategory, ShowCategoryList} = useContext(CategoryContext);

    useEffect(() => {
        ShowCategoryList();
    }, [myCategory]);

    return (
        <div className='flex justify-center items-center px-3 pt-3 my-2 h-3/4 overflow-auto'>
            <div className='grid grid-cols-2 w-full'>
                {myCategory.map((category)=>{
                    return (
                    <div key={category.id} className='flex items-center mb-1 ml-3'>
                        <div style={{ backgroundColor: category.colorCode }} className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                        <div>{category.name}</div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default ExistedCategory;