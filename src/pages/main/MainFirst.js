import React from 'react';
import { images } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ButtonContainer = styled.button`
    display: flex;
    width: 145px;
    height: 70px;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 60px;
    background: #616161;
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.show ? '1' : '0'};
`
const Text1 = styled.div`
    @media (min-width: 640px) {
        font-size: 1.5rem;
    }
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.show ? '1' : '0'};
`;

const Text2 = styled.div`
    @media (min-width: 640px) {
        font-size: 1.125rem;
    }
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.show ? '1' : '0'};
`;

const MainFirst = () => {
    const navigate = useNavigate();
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const text1Timeout = setTimeout(() => setShowText1(true), 500);
        const text2Timeout = setTimeout(() => setShowText2(true), 1000);
        const buttonTimeout = setTimeout(() => setShowButton(true), 1600);

        return () => {
            clearTimeout(text1Timeout);
            clearTimeout(text2Timeout);
            clearTimeout(buttonTimeout);
        };
    }, []);
    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='MainFirst min-h-screen pt-20 pl-12  sm:pt-36 sm:pl-32'>
            <div className='mb-16'><img src={images.mainLogo} alt="타임트리스Logo" className='w-40 sm:w-60' /></div>
            <Text1 show={showText1} className='text-lg sm:text-3xl font-bold break-keep mb-12 pr-10'>나의 하루를 테트리스처럼 기록하고 관리할 수 있는<br />하루 일정 관리 서비스, 타임트리스</Text1>
            <Text2 show={showText2} className='pb-32 text-md sm:text-lg pr-10'>타임트리스에서 매일 하루 단위로 시간을 테트리스처럼 차곡차곡 기록해보세요!</Text2>
            <ButtonContainer show={showButton} onClick={goToLogin}>시작하기</ButtonContainer>
        </div >
    );
};

export default MainFirst;
