import React, { useContext } from 'react';
import { images } from '../../utils/images';
import Category from '../../components/category/Category';
import TempCategory from './../TempCategory';
import { PDSTableContext } from '../../context/PDSTableContext';

const PdsLeft = () => {
    // api > userName 가져오면, 
    const { name } = useContext(PDSTableContext)

    return (
        <div className="flex justify-center mt-24">
            {/* 왼쪽 */}
            <div className="mr-12 mt-5">
                <div className="text-neutral-700 text-2xl font-semibold leading-10">{name}님, 오늘 하루는 어떻게 보내실 계획이신가요?</div>
                <div className="flex">
                    <button className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl" >이전</button>
                    <div className="text-neutral-700 text-4xl font-bold font-['Pretendard'] leading-10 mx-4">2024년 1월 31일 수요일</div>
                    <button className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl">다음</button>
                </div>
            </div>

            {/* 오른쪽 */}
            {/* <div className="w-96 h-60 relative bg-neutral-100 rounded-lg bg-[#F6F6F6] flex flex-col items-center justify-center">

            {/* 소은 작업 부분 
            <div className="w-96 h-60 relative bg-neutral-100 rounded-lg bg-[#F6F6F6] flex flex-col items-center justify-center">

                <div className="mb-4 w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center">
                            <div className="text-center text-neutral-700 text-xl font-medium ml-5">나의 카테고리</div>
                            <div><img src={images.btn20} alt="추가전버튼" /></div>
                        </div>
                        <div><img src={images.btn10} alt="수정전버튼" /></div>
                    </div>
                </div>
                <div className="text-center text-neutral-700 text-lg font-medium font-['Pretendard'] mb-4">
                    <div className="flex justify-center">아직 카테고리가 없으시네요.</div>
                    <div className="flex justify-center">카테고리를 추가하고 편하게 기록해보세요!</div>
                </div>
                <div className="flex justify-center">
                    <button className="w-32 h-12 bg-neutral-200 rounded-3xl bg-[#E4E4E4] text-[#A6A6A6]">추가하기</button>
                </div>
            </div> */}
            <TempCategory />
        </div>
    );
};

export default PdsLeft;