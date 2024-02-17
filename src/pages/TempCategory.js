import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { CategoryContext } from '../context/CategoryContext';

import AddModal from '../components/category/categoryModal/AddModal';
import FixModal from '../components/category/categoryModal/FixModal';

const TempCategory = () => {
    const categoryInfo = [
        {
            "name":"약속/일정/행사",
            "colorCode": "#EEDC3A",
        },
        {
            "name":"취미 생활",
            "colorCode": "#A89292",
        },
        {
            "name":"자기 계발",
            "colorCode": "#96B3FE",
        },
        {
            "name":"업무 및 스펙",
            "colorCode": "#B8A7E9",
        },
        {
            "name":"갑작스러운 일정",
            "colorCode": "#A9BDB2",
        },
        {
            "name":"잠",
            "colorCode": "#EEA1B3",
        }
    ]

    const [state, setState] = useState({
        isAddOpen: false,
        isFixOpen: false,
    })

    const ModalHandler = (openState) => {
        setState(prevState => ({
            ...prevState,
            [openState]: !prevState[openState]
        }));
    }

    return (
        <CategoryContext.Provider value={{categoryInfo, state, setState, ModalHandler }}>
            <Category />
            <AddModal /><br />
            <FixModal />
        </CategoryContext.Provider>
    );
};

export default TempCategory;