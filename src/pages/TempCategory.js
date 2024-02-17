import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { AddCategory } from '../components/category/AddCategory';
import { CategoryContext } from '../context/CategoryContext';

const TempCategory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen) 
    };

    return (
        <CategoryContext.Provider value={{isOpen, setIsOpen, openModalHandler}}>
            <Category/>
            <AddCategory />
        </CategoryContext.Provider>
    );
};

export default TempCategory;