import React from "react";
import Profile from "./components/Profile";
import Withdrawal from "./components/Withdrawal";
import WithdrawalModal from "./components/WithdrawalModal";
import { useRef } from "react";

const MyPage = () => {
    const dialogRef = useRef(null);

    // modal 오픈 함수
    const showModal = () => {
        dialogRef.current.showModal(); // 모달창 노출. show() 호출하면 다이얼로그 노출
    };

    // Modal 닫기 함수
    const closeModal = () => {
        dialogRef.current.close(); // 모달창 닫기
    };

    return (
        <div className="App container" >
            <Profile />
            <Withdrawal showModal={showModal} />
            <WithdrawalModal closeModal={closeModal} dialogRef={dialogRef} />
        </div>
    )
}

export default MyPage;