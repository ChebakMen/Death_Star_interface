import { FC, useState } from "react";


import "./BrokenModule.css"

const BrokenModule:FC = () =>{

    const [modulName, updateModulName] = useState<string>('BB-E8E3');
    const [temperature, updateTemperature] = useState<number>(24);

    return (
        <div className="brokenModule__cont">
            <h3 className="brokenModule__title">Модуль</h3>
            
        </div>
    )
}

export default BrokenModule;
