import React from 'react';
import MainThirdEle from './MainThirdEle';

const MainThird = () => {
    const Element = [
        {
            "title":"PLAN",
            "intro":"전날 밤 또는 아침에 일정을 시작하기 전, 하루를 계획해 보세요!"
        },
        {
            "title":"DO",
            "intro":"실제로 하루를 어떻게 보냈는지 간단하게 기록하세요!"
        },
        {
            "title":"SEE",
            "intro":"하루가 끝나고 잠들기 전, 오늘 하루는 어땠는지 되돌아보세요!"
        }
    ]

    return (
        <div className='MainThird min-h-screen'>
            <div className='text-[30px] md:text-[40px] px-10 py-20 text-center font-bold break-keep'>하루를 계획하고, 실행하고, 되돌아볼 수 있는 하루 일정 관리 서비스</div>
        
            <div className='container w-10/12 mx-auto box-border flex flex-col md:flex-row justify-center text-center text-[20px] break-keep'>
                <MainThirdEle Element={Element[0]}/>
                <MainThirdEle Element={Element[1]}/>
                <MainThirdEle Element={Element[2]}/>
            </div>
        </div>
    );
};

export default MainThird;