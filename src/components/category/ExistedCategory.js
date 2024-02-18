import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import axios from 'axios';

const ExistedCategory = () => {
    const {categoryInfo} = useContext(CategoryContext);
    
    const [updatedCategoryInfo, setUpdatedCategoryInfo] = useState(categoryInfo);

    useEffect(() => {
        ShowCategoryList();
    }, []);

    const ShowCategoryList = () =>{
        // const response = await axios.get(`http://43.203.6.58:8080/category`);
        // const addData = response.data

        const addData =  [
            {
                "name": "개발",
                "colorCode": "#ff2fff"
            },
            {
                "name": "알바",
                "colorCode": "#14f5d2"
            }
        ];
    
        const updatedInfo = [...categoryInfo, ...addData];
        setUpdatedCategoryInfo(updatedInfo);
    }

    return (
        <div className='flex justify-start items-center h-full px-3'>
            <div className='grid grid-cols-3 gap-y-3 gap-x-6'>
                {updatedCategoryInfo.map((category)=>{
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