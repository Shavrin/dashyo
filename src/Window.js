import React, { useState, useRef, useEffect } from 'react'
import displace from 'displacejs';
import styled from 'styled-components';


export default function Window() {
    const [title, setTitle] = useState('unnamed window');
    const [size, setSize] = useState({width: 250, height: 200});
    const [position, setPosition] = useState({x: 50, y: 50});


    const WidgetTopBar = styled.div`
        position: absolute;
        width: 100%;
        height: 25px;
        top: -25px;
        background-color: lightblue;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px 10px 0 0;
        padding: 2px 2px 0 5px;
    `;
    const WidgetWindow = styled.div`
        height: ${size.height + 10 + 'px'};
        width: ${size.width + 'px'};
        position: absolute;
        user-select: none;
        cursor: pointer;
        background-color: lightblue;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 10px 10px;
    `;


    const WidgetTitle = styled.div`
    `;
    const WidgetCloseButton = styled.img`
        height: 100%;
        border-radius: 50px;
        background-color: transparent;
        &:hover {
            background-color: red;
        }
        &:active {
            background-color: pink;
        }
    `;

    const WidgetIframe = styled.iframe`
        height: 95%;
        width: 95%;
        border: none;
        border-radius: 10px;
        background-color: white;
    `;

    const windowElement = useRef(null);
    useEffect(()=>{
        displace(windowElement.current, {
            constrain: true,
            onMouseDown: () => {
                windowElement.current.style['pointer-events'] = 'none';

            },
            onMouseUp: () => {
                windowElement.current.style['pointer-events'] = 'auto';
        }});
    });
    return (<WidgetWindow ref={windowElement}>
        <WidgetTopBar>
            <WidgetTitle>{title}</WidgetTitle>
            <WidgetCloseButton src='./svg/closeIcon.svg'></WidgetCloseButton>
        </WidgetTopBar>
        <WidgetIframe src="./widgets/timer.html"></WidgetIframe>
    </WidgetWindow>);
}