import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../context/CategoryContext';

const InputEle = ({type}) => {
    const text = type === 'Plan' ? '할 일(Plan)' : '한 일(Do)'
    const [repeat, setRepeat] = useState(false);
    const { addPlan, setAddPlan, addDo, setAddDo } = useContext(CategoryContext);

    return (
        <>
        <div className='mb-6 w-10/12 mx-auto text-start'>
            <input 
                className='pb-1 mb-1 w-full color-[#cfcfcf] border-b-[1px] border-[#cfcfcf]' type="text" 
                placeholder={`이곳에 ${text}을 적어주세요.`}
                value={type==='Plan' ? addPlan.text : addDo.text}
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
                        setAddDo(prevState => ({
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
            <RepeatRadio  />
        </> : ''}
        </>
    );
};

export default InputEle;

const RepeatRadio = () => {
    const { selectedDay, handleRepeatCheck } = useContext(CategoryContext);

    return (
        <div className='grid grid-cols-7 gap-5 pb-8'>
            <label><input type="checkbox" name="repeatDay" value="MON" onClick={handleRepeatCheck} /> 매주 월</label>
            <label><input type="checkbox" name="repeatDay" value="TUE" onClick={handleRepeatCheck} /> 매주 화</label>
            <label><input type="checkbox" name="repeatDay" value="WED" onClick={handleRepeatCheck} /> 매주 수</label>
            <label><input type="checkbox" name="repeatDay" value="THU" onClick={handleRepeatCheck} /> 매주 목</label>
            <label><input type="checkbox" name="repeatDay" value="FRI" onClick={handleRepeatCheck} /> 매주 금</label>
            <label><input type="checkbox" name="repeatDay" value="SAT" onClick={handleRepeatCheck} /> 매주 토</label>
            <label><input type="checkbox" name="repeatDay" value="SUN" onClick={handleRepeatCheck} /> 매주 일</label>
         </div>
    );
}
