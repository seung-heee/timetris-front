import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';

const InputEle = ({type}) => {
    const text = type === 'Plan' ? '할 일(Plan)' : '한 일(Do)'
    const [repeat, setRepeat] = useState(false);
    const { addPlan, setAddPlan, doPlan, setDoPlan } = useContext(CategoryContext);

    return (
        <>
        <div className='mb-6 w-10/12 mx-auto text-start'>
            <input 
                className='pb-1 mb-1 w-full color-[#cfcfcf] border-b-[1px] border-[#cfcfcf]' type="text" 
                placeholder={`이곳에 ${text})을 적어주세요.`}
                value={type==='Plan' ? addPlan.title : doPlan.title}
                onChange={(e)=> {
                    if(type==='Plan') {
                        setAddPlan(prevState => ({
                            ...prevState,
                            planRequestDTO: {
                                ...prevState.planRequestDTO,
                                title: e.target.value
                            }
                        }));
                    } else {
                        setDoPlan(prevState => ({
                            ...prevState,
                            title: e.target.value
                        }))
                    }
                    
                }}
            />
            
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
    const { selectedDay, handleRepeatCheck } = useContext(CategoryContext);

    return (
        <div className='grid grid-cols-8 gap-5 pb-8'>
            <label><input type="radio" name="repeatDay" value="everyDay" checked={selectedDay === "everyDay"} onChange={handleRepeatCheck} /> 매일</label>
            <label><input type="checkbox" name="repeatDay" value="mon" checked={selectedDay === "mon"} onChange={handleRepeatCheck} /> 매주 월</label>
            <label><input type="checkbox" name="repeatDay" value="tue" checked={selectedDay === "tue"} onChange={handleRepeatCheck} /> 매주 화</label>
            <label><input type="checkbox" name="repeatDay" value="wed" checked={selectedDay === "wed"} onChange={handleRepeatCheck} /> 매주 수</label>
            <label><input type="checkbox" name="repeatDay" value="thu" checked={selectedDay === "thu"} onChange={handleRepeatCheck} /> 매주 목</label>
            <label><input type="checkbox" name="repeatDay" value="fri" checked={selectedDay === "fri"} onChange={handleRepeatCheck} /> 매주 금</label>
            <label><input type="checkbox" name="repeatDay" value="sat" checked={selectedDay === "sat"} onChange={handleRepeatCheck} /> 매주 토</label>
            <label><input type="checkbox" name="repeatDay" value="sun" checked={selectedDay === "sun"} onChange={handleRepeatCheck} /> 매주 일</label>
        </div>
    );
}
