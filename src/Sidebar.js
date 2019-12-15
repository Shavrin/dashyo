import React from 'react'
import styled from 'styled-components';
import SidebarButton from './SidebarButton';

const Sidebar = React.memo(function (){
    const Container = styled.div`
        min-height: 100vh;
        width: 150px;
        position: fixed;
        top: 0;
        right: 0px;
        overflow-x: hidden;
        transition: all 1s ease;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        border-radius: 15px 0 0 15px;
        overflow-y: scroll;
        height: 100%;
        &:hover {
            right: 0;
        }
    `;

    return (<Container>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
        <SidebarButton title='Options'></SidebarButton>
    </Container>);
});

export default Sidebar;