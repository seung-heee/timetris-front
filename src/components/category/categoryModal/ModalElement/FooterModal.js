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
    const { myCategory, ModalHandler, HandleAddCategory, addCategory, fixCategory} = useContext(CategoryContext);

    

    return (
        <div className='flex'>
            {(type === "Add" || type === "Fix") && <>
            <ExitBtn onClick={()=>{ModalHandler(`is${type}Open`)}}>취소</ExitBtn></>}
            <ExitBtn 
            style={{ backgroundColor: "#616161", color: "white" }} 
            onClick={()=>{
                const isAddNameExists = myCategory.some(category => category.name === addCategory.name);
                const isFixNameExists = myCategory.some(category => category.name === fixCategory.name);

                if (type === 'Add' ){
                    if (addCategory.name === '' || addCategory.colorCode==='') {
                        alert('추가할 카테고리 이름 또는 색상 코드를 입력하세요.');
                    } else if (isAddNameExists) {
                        alert('이미 존재하는 카테고리로 추가할 수 없습니다.');
                    } else {
                        HandleAddCategory(type)
                    }
                } else if (type === 'Fix') {
                    if (fixCategory.name === '' || fixCategory.colorCode==='') {
                        alert('추가할 카테고리 이름 또는 색상 코드를 입력하세요.');
                    } else if (isFixNameExists) {
                        alert('이미 존재하는 카테고리로 수정할 수 없습니다.');
                    }  else {
                        HandleAddCategory(type)
                    }} 
                }}>
                {type === "Add" ? '추가' : type === "Fix" ? '수정' : "등록"}
            </ExitBtn>
        </div>
    );
};

export default FooterModal;