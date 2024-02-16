import React from 'react';

const ExistedCategory = () => {
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