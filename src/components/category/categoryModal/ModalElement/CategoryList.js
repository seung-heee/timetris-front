import React, { useContext, useEffect } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';

const CategoryList = () => {
    const {categoryInfo, setCategoryId} = useContext(CategoryContext);

    useEffect(() => {
    }, [categoryInfo])
    
    return (
        <div className="bg-[#f1f1f1] p-[20px] h-[280px] rounded-[20px]">
            {categoryInfo.map((category)=>{
                return (
                <button key={category.name} 
                    onClick={()=>{setCategoryId(category.name);}}
                    className='flex items-center mb-1'>
                    <div style={{ backgroundColor: category.colorCode }} className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                    <div>{category.name}</div>
                </button>)
            })}
        </div>
    );
};

export default CategoryList;