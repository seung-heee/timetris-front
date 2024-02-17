import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../../../context/CategoryContext';

export const ExitBtn = styled.button`
    background-color : #F1F1F1;
    color: #A8A8A8;
    border-radius: 50px;
    text-decoration: none;
    margin: 10px;
    padding: 5px 10px;
    width: 90px;
    height: 40px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const FooterModal = () => { 
    const { isOpen, openModalHandler } = useContext(CategoryContext);

    return (
        <div className='flex'>
            <ExitBtn onClick={openModalHandler}>취소</ExitBtn>
            <ExitBtn onClick={openModalHandler}>추가</ExitBtn>
        </div>
    );
};

export default FooterModal;