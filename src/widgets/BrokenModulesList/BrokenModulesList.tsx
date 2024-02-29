import { FC, useState, useEffect } from "react";
import TeamList from "widgets/teamList/TeamList";
import BrokenModule from "entities/BrokenModule/BrokenModule";
import Modal from 'react-modal';
import "./BrokenModulesList.css";

interface BrokenModuleProps {
  moduleData: {
    name: string;
    reason: string;
    location: string;
  }[];
}

const BrokenModulesList: FC = () => {
  const [brokenModules, setBrokenModules] = useState<BrokenModuleProps["moduleData"]>([]);
  const [selectedApparat, setSelectedApparat] = useState<string | null>(null);
  const [isRepairing, setIsRepairing] = useState(false);

  const openModal = (apparatName: string) => {
      setSelectedApparat(apparatName); 
      
  }

  const closeModal = () => {
      setSelectedApparat(null); 
  }

  const handleRepair = (apparatName: string) => {
    setIsRepairing(true);
    // Отправляем на починку
    // ...
    setSelectedApparat(null);
    setIsRepairing(false);
  };

  const handleCancel = (apparatName: string) => {
    setIsRepairing(false);
    // Отменяем починку
    // ...
    setSelectedApparat(null);
  };
  

  useEffect(() => {
    const fetchBrokenModules = () => {
      // Здесь ДОБАВЛЯЕМ ЛОГИКУ ОБНОВЛЕНИЯ МАССИВА
     
      // const data = await fetch('https://api.example.com/broken-modules');
      // const modules = await data.json();
      const modules:BrokenModuleProps["moduleData"] = [
        {
          name: "BB-E8E3",
          reason: "Потеря прочности",
          location: "Аппарат балансировки атмосферного давления в Секторе 931",
        },
        {
          name: "BT-0010",
          reason: "Потеря прочности",
          location: "Аппарат балансировки атмосферного давления в Секторе 931",
        },
        {
          name: "CGH-C8C7",
          reason: "Потеря прочности",
          location: "Аппарат балансировки атмосферного давления в Секторе 931",
        },
        {
          name: "Турбина ОХЛ.",
          reason: "Потеря прочности",
          location: " Генератор плазмы",
        },
        
      ];
      setBrokenModules(modules);
    };
    
    fetchBrokenModules();
  }, []);
  return (
    <div className="brokenModulesList__cont">
      <h1 className="brokenModulesList__title">
            Поврежденные модули
      </h1>
      <div className="brokenModulesList__muduls">
        {brokenModules.length > 0 ? (
          brokenModules.map(({ name, reason, location }) => (
            <div className="brokenModulesList__muduls-items">
              <div className="brokenModulesList__muduls-item">

                <BrokenModule key={name} name={name} reason={reason} location={location} />
                {!isRepairing && (
                  <div className="brokenModulesList__muduls-item-buttons">
                    <button className="brokenModulesList__muduls-item-button brokenModulesList__muduls-item-button--y" onClick={()=> openModal(name) }>Починить</button>
                    <button className="brokenModulesList__muduls-item-button brokenModulesList__muduls-item-button--un_r" onClick={() => handleCancel(name)}>Отменить</button>
                  </div>
                )}
              </div>
                
              <div className="brokenModulesList__repair">
                {selectedApparat === name && ( 
                  <div className="brokenModulesList__repair-list">
                    <button className="brokenModulesList__repair-close" onClick={closeModal}>&times;</button>
                    <TeamList key={name} name={name} reason={reason} location={location} /> 
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="brokenModulesList__info-moduls">
            <p className="brokenModulesList__text--fz27">Нет поврежденных модулей</p>
            <p className="brokenModulesList__text--fz15">Система работает исправно</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrokenModulesList;
