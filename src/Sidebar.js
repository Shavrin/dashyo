import React from 'react'
import styled from 'styled-components';
import SidebarButton from './SidebarButton';

export default function Sidebar(){
    const Container = styled.div`
        min-height: 100vh;
        width: 150px;
        position: fixed;
        top: 0;
        right: 0px;
        background-color: green;
        overflow-x: hidden;
        transition: all 1s ease;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        &:hover {
            right: 0;
        }
    `;

    return (<Container>
        <SidebarButton></SidebarButton>
        <SidebarButton></SidebarButton>
        <SidebarButton></SidebarButton>
        <SidebarButton></SidebarButton>
    </Container>);
}