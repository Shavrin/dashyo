import React from 'react'
import styled from 'styled-components';
import store from './store';

export default function SidebarButton({title}) {
    const Button = styled.div`
        background-color: white;
        height: 25px;
        font-size: 20px;
        transition: background-color .3s ease-in-out;
        border-radius: 10px 0 0 10px;
        flex-shrink: 0;
        cursor: pointer;
        &:hover {
            background-color: grey;
        }
    `;
    function openWidget(){
    }

    return <Button>{title}</Button>
}