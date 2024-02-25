import React from 'react'
import * as FaIcons from 'react-icons/fa' 



import EnergySystemIcon from "../../shared/icons/energy.svg"
import AtmosferSystemIcon from "../../shared/icons/atmosfere.svg"
import HomeIcon from "../../shared/icons/home.svg"

export const SidebarData = [
    {
        path: '/',
        icon:  <img src={HomeIcon}/>
    },
    {   
        path: '/energysystempage',
        icon: <img src={EnergySystemIcon}/>
    },
    {
        path: '/atmosfersystempage',
        icon: <img src={AtmosferSystemIcon}/>
    },
   
]
