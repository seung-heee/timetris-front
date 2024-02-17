import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../../../context/CategoryContext';

export const ExitBtn = styled.button`
    background-color : #F1F1F1;
    color: #A8A8A8;
    border-radius: 50px;
    text-decoration: none;
    margin: 10px;
    padding: 5px 20px;
    height: 40px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const FooterModal = ({type}) => { 
    const { ModalHandler } = useContext(CategoryContext);

    return (
        <div className='flex'>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>취소</ExitBtn>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>
                {type === "Add" ? '추가' : type === "Fix" ? '수정' : "등록"}
            </ExitBtn>
        </div>
    );
};

export default FooterModal;