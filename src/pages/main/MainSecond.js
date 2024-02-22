import React from 'react';
import { images } from './../../utils/images';

const MainSecond = () => {
    return (
        <div className='MainSecond min-h-full relative'>
            <div className='w-10/12 mx-auto py-10'>
                <img src={images.mainSecond} alt="" />
                <img src={images.piece1} alt="purple" className='w-[4%] absolute right-10 top-1/2' />
                <img src={images.piece2} alt="greentree" className='w-[2%] absolute top-1/3 left-20' />
                <img src={images.piece3} alt="mint" className='w-[4%] absolute bottom-10 right-1/3' />
                <img src={images.piece4} alt="blue" className='w-[4%] absolute right-32 top-1/3' />
                <img src={images.piece5} alt="green" className='w-[4%] absolute bottom-24 right-1/4' />
                <img src={images.piece6} alt="red" className='w-[3%] absolute -top-5 left-1/4' />
                <img src={images.piece7} alt="yellow" className='w-[5%] absolute top-1/4 left-1/3' />
            </div>
        </div>
    );
};

export default MainSecond;