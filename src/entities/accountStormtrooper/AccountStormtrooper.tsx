import { FC } from "react";
import Stormtrooper from "shared/Stormtrooper.webp"
import img from "shared/icons/ttt.svg"

import "./AccountStormtrooper.css"

interface AccountStormtrooperNomer {
    numer: number;
};

const AccountStormtrooper: FC<AccountStormtrooperNomer> = ({ numer }) => {
    enum Type{
        w500 = 1,
        w400 = 2
    };

    // let content;



    const getDescription = (numer: number) => {
        switch (numer) {
          case Type.w500:
            return {
              className: "accountStormtrooper__cont accountStormtrooper__cont--w500",
              name: "Штурмовик №707784",
              status: "Статус: Активный работник",
            };
          case Type.w400:
            return {
              className: "accountStormtrooper__cont accountStormtrooper__cont--w400",
              name: "Штурмовик №707784",
              status: "Статус: Активный работник",
            };
          default:
            throw new Error("Invalid type");
        }
      };
    
      const { className, name, status } = getDescription(numer);

    // switch(numer) {
    //     case Type.w500:
    //         content=<div className="accountStormtrooper__cont accountStormtrooper__cont--w500">
    //         <img src={img } alt="Stormtrooper__img" className="accountStormtrooper__img" />
    //         <div className="accountStormtrooper__info">
    //             <h3 className="accountStormtrooper__name">Штурмовик №707784</h3>
    //             <p className="accountStormtrooper__status">Статус: Активный работник</p>
    //         </div> 
    //         </div>
    //         break;
    //     case Type.w400: 
    //         content=<div className="accountStormtrooper__cont accountStormtrooper__cont--w400">
    //             <img src={img } alt="Stormtrooper__img" className="accountStormtrooper__img" />
    //             <div className="accountStormtrooper__info">
    //                 <h3 className="accountStormtrooper__name">Штурмовик №707784</h3>
    //                 <p className="accountStormtrooper__status">Статус: Активный работник</p>
    //             </div>
    //         </div>
    //         break;
    //     default:
    //         throw new Error(`Type`);

    // }

    return (
        <div className={className}>
          <img src={img} alt="Stormtrooper__img" className="accountStormtrooper__img" />
          <div className="accountStormtrooper__info">
            <h3 className="accountStormtrooper__name">{name}</h3>
            <p className="accountStormtrooper__status">{status}</p>
          </div>
        </div>
      );
};

export default AccountStormtrooper;