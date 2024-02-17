import { useContext, useState } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../context/CategoryContext';


export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: black;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn) `
background-color : #F1F1F1;
color: #A8A8A8;
border-radius: 50px;
text-decoration: none;
margin: 10px;
padding: 10px 35px;
height: 40px;
display : flex;
justify-content : center;
align-items : center;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 30px;
  width: 900px;
  heigth: 500px;
  background-color: #ffffff;
    >div.desc {
      margin: 50px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;

export const ModalTitle = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
        >div.titleStyle {
            font-size: 28px;
            color: #383838;
            font-weight: bold;
        }
`;

export const ModalInput = styled.input.attrs((props) => ({
    role: 'dialog',
  }))`
    display: flex;
    justify-content: space-between;
    width: 90%;
    border-bottom: 1px solid #CFCFCF;
    margin-bottom: 20px;
    padding-bottom: 3px;
`;

export const ShowColorCode = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
        div.addBtn {
            background-color : #F1F1F1;
            color: #A8A8A8;
            border-radius: 50px;            
            padding: 10px 25px;
            align-self: flex-end;
            text-align: center;
        }
`;

export const CategoryListBox = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
        div.CategoryListBoxTitle {
            margin-bottom: 10px;
            margin-left: 10px;
        }
`;

export const CategoryList = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    background-color: #F1F1F1;
    padding: 15px;
    height: 280px;
    border-radius: 20px;
    margin-right: 10px;
`;

export const FixCategory = ({isFixedOpen, setIsFixedOpen, openFixedModalHandler}) => {
    const { categoryInfo } = useContext(CategoryContext)

    return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openFixedModalHandler}>카테고리 수정하기</ModalBtn>

        {isFixedOpen ? 
        <ModalBackdrop onClick={openFixedModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
                <ModalTitle>
                    <div className='titleStyle'>나의 카테고리</div>
                    <ExitBtn onClick={openFixedModalHandler}>닫기</ExitBtn>
                </ModalTitle>

                <div className='w-full flex justify-between'>
                    <CategoryListBox>
                        <div className='CategoryListBoxTitle'>수정할 카테고리를 선택해주세요</div>
                        <CategoryList>
                            카테고리 목록
                        </CategoryList>
                    </CategoryListBox>
                    {/* Input 창 */}
                    <div className="w-8/12 flex flex-col items-center justify-center">
                        <ModalInput placeholder="카테고리 이름"></ModalInput>

                        <ShowColorCode>
                            <div className='colorCodeTitle'>색상 선택</div>
                            <div className='flex items-center'>
                            {categoryInfo.map((category)=>{
                                return (
                                    <button style={{ backgroundColor: category.colorCode }} className={`w-[45px] h-[45px] rounded-[50px] mr-3 my-5`}></button>
                                )
                            })}
                            </div>
                        <div className="addBtn w-1/3" onClick={openFixedModalHandler}>카테고리 추가</div>
                        </ShowColorCode>
                    </div>
                </div>

                <div className='flex'>
                    <ExitBtn onClick={openFixedModalHandler}>취소</ExitBtn>
                    <ExitBtn onClick={openFixedModalHandler}>수정</ExitBtn>
                </div>
            </ModalView>
          </ModalBackdrop>
          : null
        }
      </ModalContainer>
    </>
  );
};