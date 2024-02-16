import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { AddCategory } from '../components/category/AddCategory';

const TempCategory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen) 
    };

    return (
        <div>
            <Category isOpen={isOpen} setIsOpen={setIsOpen} openModalHandler={openModalHandler} />
            <AddCategory isOpen={isOpen} setIsOpen={setIsOpen} openModalHandler={openModalHandler} />
        </div>
    );
};

export default TempCategory;