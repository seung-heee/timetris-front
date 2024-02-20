import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { CategoryContext } from '../context/CategoryContext';

import AddModal from '../components/category/categoryModal/AddModal';
import FixModal from '../components/category/categoryModal/FixModal';
import PlanModal from '../components/category/categoryModal/PlanModal';
import DoModal from '../components/category/categoryModal/DoModal';
import axios from 'axios';

const TempCategory = () => {
    // 토큰
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwODQ0NzQ2MywiZW1haWwiOiJzaHRtZGdtbDI1OTVAZ21haWwuY29tIiwibWVtYmVySWQiOjl9.Z4kKw5qUCTIXxLKHcYvDfBj1-_nmAM76rvkenON7Kwae_BL2so2DCEuKQwJHdY3lzBFRmP7okNhMzcdaqL3dqw`
    };

    const selectColorCode = ["#EEDC3A","#EEA1B3","#96B3FE","#A89292","#B8A7E9","#FFDA7A","#A9BDB2","#E4B7FF","#A8DFD5","#C7FF81","#528DFF", "#5C5C5C"]
    let categoryInfo = [
        {
            "id":3,
            "name":"약속/일정/행사",
            "colorCode": "#EEDC3A",
        },
        {
            "id":4,
            "name":"취미 생활",
            "colorCode": "#A89292",
        },
        {
            "id":5,
            "name":"자기 계발",
            "colorCode": "#96B3FE",
        },
        {
            "id":6,
            "name":"업무 및 스펙",
            "colorCode": "#B8A7E9",
        },
        {
            "id":7,
            "name":"갑작스러운 일정",
            "colorCode": "#A9BDB2",
        }
    ]
    // 모달 띄우기 state
    const [state, setState] = useState({
        isAddOpen: false,
        isFixOpen: false,
        isPlanOpen: false,
        isDoOpen: false,
    })
    // 카테고리 추가
    const [addCategory, setAddCategory]= useState({
        name: "",
        colorCode: ""
    })
    // 카테고리 수정
    const [fixCategory, setFixCategory]= useState({
        name: "",
        colorCode: ""
    })

    const [categoryId, setCategoryId] = useState(0);
    const [myCategory, setMyCategory] = useState([]); // 카테고리 조회
    const [selectedDay, setSelectedDay] = useState(null); // 반복 일정

    const ShowCategoryList = async () => {
        try {
            const response = await axios.get(`http://43.203.6.58:8080/category`, { headers });
            setMyCategory(response.data.result);
        } catch (error) {
            console.error('에러:', error);
        }
    }

    const HandleAddCategory = async (type) => {
        try {
            if (type === 'Fix') { // 카테고리 수정
                await axios.put(`http://43.203.6.58:8080/category/${categoryId}`, fixCategory, { headers });

                setFixCategory({
                    name: '',
                    colorCode: '',
                })
            } else if (type === 'Delete') { // 카테고리 삭제
                await axios.delete(`http://43.203.6.58:8080/category/${categoryId}`, { headers });
            } else { // 카테고리 작성
                await axios.post('http://43.203.6.58:8080/category', addCategory, { headers });

                setAddCategory({
                    name: '',
                    colorCode: '',
                })
            }
           
            setCategoryId('')
            
        } catch(error) {
            console.log('에러:', error)
        }
        
    }
    const handleRepeatCheck = (e) => {
        const { value } = e.target;

        setSelectedDay(prevSelectedDay => prevSelectedDay !== value ? value : null);
    };
    const ModalHandler = (openState) => {
        setState(prevState => ({
            ...prevState,
            [openState]: !prevState[openState]
        }));
    }

    return (
        <CategoryContext.Provider 
        value={{ state, setState, ModalHandler, 
                categoryInfo, selectColorCode, 
                addCategory, setAddCategory, HandleAddCategory,
                selectedDay, handleRepeatCheck,
                categoryId, setCategoryId,
                myCategory, setMyCategory, ShowCategoryList,
                fixCategory, setFixCategory }}>
            <Category />
            <AddModal /><br /><br/><br/>
            <FixModal /><br/><br/><br/>
            <PlanModal /><br/><br/><br/>
            <DoModal />
        </CategoryContext.Provider>
    );
};

export default TempCategory;