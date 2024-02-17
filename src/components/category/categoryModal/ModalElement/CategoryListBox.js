import React from 'react';
import CategoryList from './CategoryList';

const CategoryListBox = () => {
    return (
        <div className='flex flex-col justify-between w-[40%] mr-10'>
            <div className='mb-3'>수정할 카테고리를 선택해주세요</div>
            <CategoryList />
        </div>
    );
};

export default CategoryListBox;