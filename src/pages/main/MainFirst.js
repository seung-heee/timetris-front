import React from 'react';
import { images } from '../../utils/images';

const MainFirst = () => {
    return (
        <div className='MainFirst min-h-screen pt-20 pl-12  sm:pt-36 sm:pl-32'>
            <div className='mb-16'><img src={images.mainLogo} alt="타임트리스Logo" className='w-40 sm:w-60' /></div>
            <div className='text-lg sm:text-3xl font-bold break-keep mb-12 pr-10'>나의 하루를 테트리스처럼 기록하고 관리할 수 있는<br />하루 일정 관리 서비스, 타임트리스</div>
            <div className='pb-32 text-md sm:text-lg pr-10'>타임트리스에서 매일 하루 단위로 시간을 테트리스처럼 차곡차곡 기록해보세요!</div>
            <button className='py-2 px-7 bg-darkgrey rounded-3xl text-white'>시작하기</button>
        </div>
    );
};

export default MainFirst;