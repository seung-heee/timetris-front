import React from 'react';
import { images } from '../../utils/images';

const MainFourth = () => {
    return (
        <div className='MainFourth min-h-screen'>
            <div className='text-[24px] md:text-[40px] pt-20 text-center font-bold flex flex-col md:flex-row items-center justify-center'>
                카테고리를 추가하고 색상을 지정해
                <span className='inline-block'><img src={images.eyes} alt="눈" className='w-[24px] md:w-[65px] mx-2' /></span>
                한 눈에 확인할 수 있어요!
            </div>

            <div className='w-8/12 mx-auto py-10'>
                <img src={images.mainCategory} alt="" />
            </div>
        </div>
    );
};

export default MainFourth;