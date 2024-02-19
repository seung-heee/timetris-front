import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../../../context/CategoryContext';

export const ExitBtn = styled.button`
    color: ${(props) => props.color || '#A8A8A8'};
    background-color: ${(props) => props.backgroundColor  || '#F1F1F1'};
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
    const { ModalHandler, HandleAddCategory } = useContext(CategoryContext);

    return (
        <div className='flex'>
            {(type === "Add" || type === "Fix") && <>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>취소</ExitBtn></>}
            <ExitBtn style={{ backgroundColor: "#616161", color: "white" }} onClick={()=>{HandleAddCategory(type)}}>
                {type === "Add" ? '추가' : type === "Fix" ? '수정' : "등록"}
            </ExitBtn>
        </div>
    );
};

export default FooterModal;