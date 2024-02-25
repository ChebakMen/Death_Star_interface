import { FC } from "react";
import BrokenModule from 'entities/BrokenModule/BrokenModule'

import "./BrokenModulesList.css"

const BrokenModulesList:FC = () =>{
    return (
        <div className="brokenModulesList__cont">
            <h1 className="brokenModulesList__title">
                Поврежденные модули
            </h1>

            <div className="brokenModulesList__info-moduls">
                <p className="brokenModulesList__text--fz27">Нет поврежденных модулей</p>
                <p className="brokenModulesList__text--fz15">Система работает исправно</p>
            </div>
            {/* <BrokenModule/> */}
            
        </div>
    )
}

export default BrokenModulesList;
