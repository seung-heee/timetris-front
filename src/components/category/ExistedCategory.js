import React, { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

const ExistedCategory = () => {
    const {categoryInfo} = useContext(CategoryContext);
    
    return (
        <div className='flex justify-start items-center h-full px-10'>
            <div className='grid grid-cols-2 gap-y-3 gap-x-28'>
                {categoryInfo.map((category)=>{
                    return (
                    <div className='flex items-center'>
                        <div style={{ backgroundColor: category.colorCode }} className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                        <div>{category.name}</div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default ExistedCategory;