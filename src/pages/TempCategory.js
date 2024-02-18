import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { CategoryContext } from '../context/CategoryContext';

import AddModal from '../components/category/categoryModal/AddModal';
import FixModal from '../components/category/categoryModal/FixModal';
import PlanModal from '../components/category/categoryModal/PlanModal';
import DoModal from '../components/category/categoryModal/DoModal';

const TempCategory = () => {
    const selectColorCode = [, "#EEDC3A","#EEA1B3","#96B3FE","#A89292","#B8A7E9","#FFDA7A","#A9BDB2","#E4B7FF","#A8DFD5","#C7FF81","#528DFF", "#5C5C5C"]
    
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
        isPlanOpen: false,
        isDoOpen: false,
    })

    const ModalHandler = (openState) => {
        setState(prevState => ({
            ...prevState,
            [openState]: !prevState[openState]
        }));
    }

    return (
        <CategoryContext.Provider value={{ state, setState, ModalHandler, categoryInfo, selectColorCode}}>
            <Category />
            <AddModal /><br /><br/><br/>
            <FixModal /><br/><br/><br/>
            <PlanModal /><br/><br/><br/>
            <DoModal />
        </CategoryContext.Provider>
    );
};

export default TempCategory;