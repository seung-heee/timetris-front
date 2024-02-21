import React, { useContext, useEffect } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';

const CategoryList = ({type}) => {
    const {myCategory, categoryId, setCategoryId, addPlan, setAddPlan, doPlan, setDoPlan} = useContext(CategoryContext);
    
    return (
        <div className="bg-[#f1f1f1] px-[10px] pt-[10px] h-[280px] rounded-[20px] overflow-y-auto">
            {myCategory.map((category)=>{
                return (
                    <button 
                        key={category.id}
                        value={category.id}
                        onClick={()=>{
                            setCategoryId(category.id);
                            if (type === 'Plan') {
                                setAddPlan(prevState => ({
                                    ...prevState,
                                    planRequestDTO: {
                                        ...prevState.planRequestDTO,
                                        categoryId: categoryId
                                    }
                                }));
                            } else if(type === 'Do') {
                                setDoPlan(prevState => ({
                                    ...prevState,
                                    categoryId: categoryId
                                }))
                            }
                        }}
                        className={`flex items-center mb-1 w-full
                        ${category.id === categoryId ? 'bg-[#E4E4E4] py-[0.8px] pl-1 rounded-xl' : ''}
                        `}>
                        <div 
                            style={{ backgroundColor: category.colorCode }} 
                            className={`w-[15px] h-[15px] rounded-[50px] mr-3`}></div>
                        <div>{category.name}</div>
                    </button>)
            })}
        </div>
    );
};

export default CategoryList;