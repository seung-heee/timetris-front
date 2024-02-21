import React, { useState } from 'react';
import { images } from '../../utils/images';

const PdsMiddle = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [draggedCell, setDraggedCell] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // 버튼을 누를 때 알림 보이기
    const handleButtonClick = () => {
        setShowAlert(true);

        // 1300ms 후에 알림 숨기기
        setTimeout(() => {
            setShowAlert(false);
        }, 1300);
    };

    const handleDragStart = (event, cellInfo) => {
        setDraggedCell(cellInfo);
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false); // 드래그가 끝나면 상태를 false로 설정
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = () => {
        // 여기서 데이터베이스로 draggedCell의 정보를 보낼 수 있습니다.
        console.log("Do 정보:", draggedCell);
        // 이후에 색상 변경 등의 작업을 수행할 수 있습니다.
    };

const Plan = ({ children }) => {
    return (
        <div className="w-96 h-20 left-0 top-0 relative border border-[#E4E4E4] bg-[#F6F6F6]">
            {children}
        </div>
    );
};

const Time = ({ time }) => {
    return (
        <div className="w-32 h-20 left-0 top-0 relative border border-[#E4E4E4] bg-[#F6F6F6] text-center text-zinc-600 text-2xl font-normal leading-10 flex justify-center items-center">
            {time}
        </div>
    );
};

const Do = ({ doValue, isDragging }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", doValue); // 드래그하는 동안 전달할 데이터 설정
    };

    return (
        <div className={`w-16 h-20 left-0 top-0 relative border border-[#E4E4E4] text-center text-zinc-600 text-2xl font-normal leading-10 flex justify-center items-center ${isDragging ? 'bg-[#111111]' : 'bg-[#F6F6F6]'}`}
            draggable="true"
            onDragStart={(event) => handleDragStart(event)}
            onDragEnd={() => setIsDragging(false)}>
            {doValue}
        </div>
    );
};

    return (
        <div>
            <div className="flex  ml-64 mt-6 mb-2">
            <img 
                src={images.btn30} 
                alt="안내버튼" 
                onClick={handleButtonClick} // 버튼 클릭 이벤트 추가
            />
            {/* 알림이 보이는 경우에만 표시 */}
            {showAlert && (
                <div className=" ml-5 w-96 h-12 relative">
                    <div className="w-96 h-12 left-0 top-0 absolute">
                        <div className="opacity-30 w-96 h-12 left-0 top-0 absolute">
                            <div className="w-96 h-12 left-0 top-0 absolute bg-[#9B9B9B] rounded-2xl" />
                            <div className="w-96 h-12 left-0 top-0 absolute rounded-2xl" />
                        </div>
                        <div className="left-[22px] top-[15px] absolute text-center text-neutral-700 text-base font-medium font-[#383838]">원하는 시간대를 드래그해서 일정을 작성해보세요!</div>
                    </div>
                </div>
            )}
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="w-96 h-12 bg-zinc-100 rounded-tl-lg border border-[#E4E4E4] text-center text-neutral-400 text-2xl font-semibold leading-10 bg-[#F1F1F1] text-[#A6A6A6] flex justify-center items-center ">PLAN</div>
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />
                    <Plan />

                    
                    
                </div>

                <div>
                    <div className="w-32 h-12 bg-zinc-100 border border-[#E4E4E4] text-center text-neutral-400 text-2xl font-semibold leading-10 bg-[#F1F1F1] text-[#A6A6A6]"></div>
                    <Time time="4AM" />
                    <Time time="5AM" />
                    <Time time="6AM" />
                    <Time time="7AM" />
                    <Time time="8AM" />
                    <Time time="9AM" />
                    <Time time="10AM" />
                    <Time time="12PM" />
                    <Time time="1PM" />
                    <Time time="2PM" />
                    <Time time="3PM" />
                    <Time time="4PM" />
                    <Time time="5PM" />
                    <Time time="6PM" />
                    <Time time="7PM" />
                    <Time time="8PM" />
                    <Time time="9PM" />
                    <Time time="10PM" />
                    <Time time="11PM" />
                    <Time time="12AM" />
                    <Time time="1AM" />
                    <Time time="2AM" />
                    <Time time="3AM" />

                </div>
                <div>
                    <div className="w-96 h-12 bg-zinc-100 rounded-tr-lg border border-[#E4E4E4] text-center text-neutral-400 text-2xl font-semibold leading-10 bg-[#F1F1F1] text-[#A6A6A6] flex justify-center items-center">DO</div>
                    <div className="grid grid-cols-6 grid-rows-3">
                    <Do doValue={1} isDragging={isDragging}/><Do doValue={2} isDragging={isDragging}/><Do doValue={3} isDragging={isDragging}/>
                    <Do/><Do/><Do/>

                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    <Do/><Do/><Do/><Do/><Do/><Do/>
                    </div>
                    
                </div> 
            </div>
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-100 h-64 mb-32 border border-[#E4E4E4] bg-[#F6F6F6] text-center text-2xl font-normal leading-10 relative rounded-bl-lg rounded-br-lg">
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                            <div className="flex pt-4 pl-6 pr-3">
                                <div className="mr-3 text-3xl font-semibold leading-10">SEE</div>
                                <div className="w-full h-36"><textarea className="w-full h-full bg-[#F6F6F6]" placeholder="오늘 하루는 어떠셨나요?"></textarea></div>
                            </div>
                            <div>
                                <button className="absolute bottom-0 right-0 mb-5 mr-5 w-24 h-12  bg-[#616161] rounded-3xl justify-center items-center inline-flex text-center text-white text-lg font-semibold">작성하기</button>
                            </div>
                        </div>
                    </div>
                </div>
</div>
        </div>
        
    );
};

export default PdsMiddle;
