import React from 'react';
import { images } from '../utils/images';
import '../css/main.css'
import MainFirst from '../components/main/MainFirst';
import MainSecond from '../components/main/MainSecond';
import MainThird from '../components/main/MainThird';
import MainFourth from '../components/main/MainFourth';
import MainLast from '../components/main/MainLast';

const Main = () => {
    return (
        <div className='Main w-full'>
            <MainFirst />
            <MainSecond />
            <MainThird />
            <MainFourth />
            <MainLast />
        </div>
    );
};

export default Main;