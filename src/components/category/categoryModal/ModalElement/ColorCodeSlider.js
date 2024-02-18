import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../../../context/CategoryContext';


const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  img {
    pointer-events: none;
  }
`;

const Slider = styled.div`
  display: flex;
  width: max-content;
  cursor: grab;

  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-bottom: 21px;

  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    width: 248px;
    height: 9px;
    border-radius: 100px;
    background: #d9d9d9;
  }
  &::-webkit-scrollbar-track {
    background: transperant;
  }
`;


export const ColorCodeSlider = ({ children, hasCloudyArea = false, cloudyAreaBgColor, ...rest }) => {
    const { selectColorCode } = useContext(CategoryContext);

    const containerRef = useRef(null);
  
    const [dragging, setDragging] = useState(false);
    const [clickPoint, setClickPoint] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDownEvent = (e) => {
      setDragging(true);
      if (containerRef.current) {
        setClickPoint(e.pageX);
        setScrollLeft(containerRef.current.scrollLeft);
      }
    };
  
    const handleMouseMoveEvent = (e) => {
      if (!dragging) return;
  
      e.preventDefault();
  
      if (containerRef.current) {
        const walk = e.pageX - clickPoint;
  
        containerRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    return (
        <Container {...rest}>
        <Slider
            ref={containerRef}
            onMouseDown={handleMouseDownEvent}
            onMouseLeave={() => setDragging(false)}
            onMouseUp={() => setDragging(false)}
            onMouseMove={handleMouseMoveEvent}
        >
            {selectColorCode.map((colorCode)=>{
                return (
                    <button style={{ backgroundColor: colorCode }} className={`w-[45px] h-[45px] rounded-[50px] mr-3 my-5`}></button>
                )
            })}
        </Slider>
        </Container>
    );
};
