import React from 'react';
import { images } from '../../utils/images';

const MainThirdEle = ({Element}) => {
    return (
        <div className='md:w-[34%] mb-10'>
            <div className=' bg-white py-12 px-10 mx-5'>
                <img src={images[Element.title]} alt="" className='w-[240px] h-[150px] mx-auto mb-10'/>
                <div>{Element.intro}</div>
            </div>
            <div className='w-[100px] bg-[#BF9AFB] text-white rounded-3xl mx-auto mt-10 py-1'>{Element.title}</div>
        </div>
    );
};

export default MainThirdEle;