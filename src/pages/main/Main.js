import React, { useEffect, useState } from 'react';
import '../../css/main.css'
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
import MainThird from './MainThird';
import MainFourth from './MainFourth';
import MainLast from './MainLast';


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