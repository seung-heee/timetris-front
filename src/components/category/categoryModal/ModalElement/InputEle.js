import React, { useState } from 'react';

const InputEle = ({type}) => {
    const text = type==='Plan' ? '할 일(Plan)' : '한 일(Do)'
    const [repeat, setRepeat] = useState(false);

    return (
        <>
        <div className='mb-6 w-10/12 mx-auto text-start'>
            <input className='pb-1 mb-1 w-full color-[#cfcfcf] border-b-[1px] border-[#cfcfcf] ' type="text" placeholder={`이곳에 ${text})을 적어주세요.`} />
            {type==="Plan" &&
            <div className='flex items-center mt-2'>
                <input id='repeatDay' type="checkbox" value={repeat} onChange={()=>{setRepeat(!repeat)}} />
                <label htmlFor="repeatDay" className='ml-3'>반복 일정</label>
            </div>}
        </div>

        {repeat ? <>
            <RepeatRadio repeat={repeat} setRepeat={setRepeat} />
        </> : ''}
        </>
    );
};

export default InputEle;

const RepeatRadio = () => {
    const [repeatDay, setRepeatDay] = useState({
        everyDay: true,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
    })

    const handleRepeatCheck = (e) => {
        const { value, checked } = e.target;
        setRepeatDay(prevState => ({
            ...prevState,
            [value]: checked,
        }));
    }
    
    return (
        <div className='grid grid-cols-8 gap-5 pb-8'>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="everyDay"
                    checked={repeatDay.everyDay}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매일</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="mon"
                    checked={repeatDay.mon}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 월</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="tue"
                    checked={repeatDay.tue}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 월</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="wed"
                    checked={repeatDay.wed}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 화</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="thu"
                    checked={repeatDay.thu}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 수</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="fri"
                    checked={repeatDay.fri}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 목</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="repeat"
                    value="sat"
                    checked={repeatDay.sat}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 토</span>
            </label><label>
                <input
                    type="radio"
                    name="repeat"
                    value="sun"
                    checked={repeatDay.sun}
                    onChange={handleRepeatCheck}
                />
                <span className='ml-2'>매주 일</span>
            </label>
        </div>
    )
}
