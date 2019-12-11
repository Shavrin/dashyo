import React, { useState, useRef, useEffect } from 'react'
import displace from 'displacejs';

export default function Window() {
    const [title, setTitle] = useState('unnamed window');
    const [size, setSize] = useState({width: 250, height: 200});
    const [position, setPosition] = useState({x: 50, y: 50});

    const windowStyle = {
        backgroundColor: 'grey',
        height: size.height,
        width: size.width,
        position: 'absolute',
        userSelect: 'none',
        cursor: 'pointer',
        borderRadius: '10px',
        border: '1px solid white'
    }

    const iframeStyle = {
        height: '95%',
        width: '100%',
        position: 'relative',
        top: '5%'
    }

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
    return (<div ref={windowElement} style={windowStyle}>
        <iframe title="window" style={iframeStyle} src="./widgets/timer.html"></iframe>
    </div>);
}