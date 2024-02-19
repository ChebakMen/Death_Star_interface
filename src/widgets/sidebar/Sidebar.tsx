import React from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa' 

import { SidebarData } from '../../shared/sidebar/SidebarData'

import styled from 'styled-components'

import { useState } from 'react'
import "./sidebar.css"

import meinImg from "../../shared/icons/mein.svg"

import Subtract from "../../shared/icons/Subtract.svg"

//import "./DeathStar.otf"


//const tempIcon = require('.../shared/icons/Group1.png');

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    return (
        <Navbar className="navbar">
        
        <ImgMain src={meinImg}/>

        
        <MenuItemContainer>
                {SidebarData.map((item, index) => {
                    return (
                            <MenuItem key={index}>
                                <MenuItemLinks to={item.path}>
                                    {item.icon}
                                </MenuItemLinks>
                            </MenuItem>
                    )
                })}
        </MenuItemContainer>
            

                <Git target='_blank' href="https://github.com/andrwnv/death-star-playground/tree/11-microservices-refactoring/docs">
                    <ImgSub src={Subtract}/>
                </Git>

        </Navbar>
            
        
    )
}



const ImgSub = styled.img`
`

const ImgMain = styled.img`
    margin-top: -48px;
    margin-left: -135px;
    width: 320px;
    height: 270px;
    
`

const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0px;
`



const MenuItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 78px;
    height: 78px;
    border-radius: 15px;
    background-color: rgb(16 20 50 / 80%);
    padding: 15px;
    margin-bottom: 55px;

    &:nth-child(2) {
        padding: 13px 19px 11px 19px;
    }
`

const MenuItemLinks = styled(Link)`
    display: flex;
`

const MenuItemContainer = styled.div`
    margin-top: 40px;
    margin-left: 41px;
    
`

const Git = styled.a`
    display: flex;
    margin-top: 145px;
    width: 78px;
    height: 78px;
    margin-left: 41px;
    align-items: end;
`

export default Sidebar
