import React from 'react';
import { images } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
`
const ContentContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const MainLast = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='MainLast min-h-screen flex justify-center items-center text-center'>
            <ContentContainer>
                <div className='mb-16'><img src={images.mainLogo} alt="타임트리스Logo" className='w-40 sm:w-60 mx-auto' /></div>
                <div className='text-lg sm:text-3xl font-bold break-keep mb-12'>나의 하루를 테트리스처럼 기록하고 관리할 수 있는<br />하루 일정 관리 서비스, 타임트리스</div>
                <div className='pb-28 text-md sm:text-lg break-keep'>타임트리스에서 매일 하루 단위로 시간을 테트리스처럼 차곡차곡 기록해보세요!</div>
                <ButtonContainer onClick={goToLogin}>시작하기</ButtonContainer>
            </ContentContainer>
        </div>
    );
};

export default MainLast;