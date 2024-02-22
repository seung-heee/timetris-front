import React from 'react';
import CategoryList from './CategoryList';

const CategoryListBox = ({text, type}) => {
    return (
        <div className='flex flex-col justify-between w-[40%] mr-10 text-start'>
            <div className='mb-3'>{text}</div>
            <CategoryList type={type} />
        </div>
    );
};

export default CategoryListBox;