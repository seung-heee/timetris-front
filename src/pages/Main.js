import React from 'react';
import { images } from '../utils/images';
import '../css/main.css'
import MainFirst from '../components/main/MainFirst';
import MainSecond from '../components/main/MainSecond';
import MainThird from '../components/main/MainThird';

const Main = () => {
    return (
        <div className='Main w-full'>
            <MainFirst />
            <MainSecond />
            <MainThird />
        </div>
    );
};

export default Main;