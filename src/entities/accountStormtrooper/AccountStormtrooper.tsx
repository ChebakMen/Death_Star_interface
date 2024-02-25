import { FC } from "react";
import Stormtrooper from "shared/Stormtrooper.webp"

import "./AccountStormtrooper.css"

const AccountStormtrooper:FC = () =>{
    return (
        <div className="accountStormtrooper__cont">
            <img src={Stormtrooper} alt="Stormtrooper__img" className="accountStormtrooper__img" />
            <div className="accountStormtrooper__info">
                <h3 className="accountStormtrooper__name">Штурмовик №29391</h3>
                <p className="accountStormtrooper__status">Статус: Активный работник</p>
            </div>
            
             
        </div>
    )
}

export default AccountStormtrooper;