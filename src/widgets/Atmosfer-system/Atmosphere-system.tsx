import styled from 'styled-components';
import React, { FC, useState,ReactNode, useCallback, useEffect } from "react";
import "./Atmosphere-system.css";
import SectionTitle from 'entities/sectionTitle/SectionTitle'
import StateElement from 'entities/StateElement/StateElement'

type System_state = {
    atmospheric_pressure: number
    temperature: number
    humidity: number
    durability: number
}

type Pressure_balancer = {
    name: string
    is_on: boolean
    overall_durability: number
    bb_e8e3_is_on: boolean
    bt_0010_is_on: boolean
}

type Humidity_controller = {
    name: string
    is_on: boolean
    durability: number
    time_before_stabilize_ms: number
    current_humidity: number
}

type Pressure_stabilizer = {
    name: string
    is_on: boolean
    durability: number
    pressure_is_fine: boolean
    time_before_stabilize_ms: number
    current_pressure_mmhg: number
    co2_volume: number
    o2_volume: number
    n2_volume: number  
    another_volume: number
}

type Temperature_stabilizer = {
    name: string
    is_on: boolean
    time_before_stabilize_ms: number
    current_temperature: number
}

type Apparat = {
    pressure_balancer: Pressure_balancer
    humidity_controller: Humidity_controller
    pressure_stabilizer: Pressure_stabilizer
    temperature_stabilizer: Temperature_stabilizer
}

const AtmosphereSystem:FC = () => {
    
    const [apparats, UpdateApparats] = useState<Apparat[]>([]);

    useEffect(() => {
        const fillApparatsArray = () => {
            const newApparats: Apparat[] = Array(15).fill({
                pressure_balancer: {
                    name: "PressureBalancer",
                    is_on: true,
                    overall_durability: 0,
                    bb_e8e3_is_on: true,
                    bt_0010_is_on: true
                },
                humidity_controller: {
                    name: "CGH-C8C7",
                    is_on: true,
                    durability: 0,
                    time_before_stabilize_ms: 0,
                    current_humidity: 0
                },
                pressure_stabilizer: {
                    name: "BB-E8E3",
                    is_on: true,
                    durability: 0,
                    pressure_is_fine: true,
                    time_before_stabilize_ms: 0,
                    current_pressure_mmhg: 0,
                    co2_volume: 0,
                    o2_volume: 0,
                    n2_volume: 0,
                    another_volume: 0
                },
                temperature_stabilizer: {
                    name: "BT-0010",
                    is_on: true,
                    time_before_stabilize_ms: 0,
                    current_temperature: 0
                }
            });

            UpdateApparats(newApparats);
        };

        fillApparatsArray();
    }, []);




    const [durability, updateDurability] = useState<number>(89);

    // Все для E8E3
    const [durability_E8E3, updateDurability_E8E3] = useState<number>(89);
    const [can_breathe_E8E3, updateСan_breathe] = useState<string>("Да");
    const [time_stabilisation_E8E3, updateTime_stabilisation_E8E3] = useState<number>(2);
    const [pressure_E8E3, updatePressure_E8E3] = useState<number>(2);
    const [CO2_E8E3, updateCO2_E8E3] = useState<number>(2.9);
    const [O2_E8E3, updateO2_E8E3] = useState<number>(18);
    const [N2_E8E3, updateN2_E8E3] = useState<number>(78);
    const [Other_E8E3, updateOther_E8E3] = useState<number>(1.1);

    // Все для 0010
    const [durability_0010, updateDurability_0010] = useState<number>(89);
    const [time_stabilisation_0010, updateTime_stabilisation_0010] = useState<number>(2);
    const [temp_E8E3, updateTemp_E8E3] = useState<number>(29);
    
    // Все для C8C7
    const [durability_C8C7, updateDurability_C8C7] = useState<number>(89);
    const [time_stabilisation_C8C7, updateTime_stabilisation_C8C7] = useState<number>(2);
    const [wet_C8C7, updateWet_C8C7] = useState<number>(29);


    

    const [selectedApparat, setSelectedApparat] = useState<string | null>(null);
    const [modalSize, setModalSize] = useState<string>('modal-small');
    const [isBlur, setIsBlur] = useState<boolean>(false);

    const [sector, updateSector] = useState<string>("Сектор:933");

    const openModal = (apparatName: string, size: string, ix: number) => {
        setSelectedApparat(apparatName); 
        setModalSize(size);
        setIsBlur(true);

        document.addEventListener('keyup', handleEsc);
        document.addEventListener('mousedown', handleClickOutside);



        
    }

    const closeModal = useCallback(() => {
        setSelectedApparat(null); 
        setIsBlur(false); 

        document.removeEventListener('keyup', handleEsc);
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleEsc = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        const modal = document.querySelector('.modal');
        if (modal && !modal.contains(event.target as Node)) {
            closeModal();
        }
    }, [closeModal]);

    

    let modalContent = null;

    switch (selectedApparat) {
        case 'BB-E8E3':
            modalContent = (
                    <div className='modul'>
                    <div className="modul--top">
                        <p className='modul--text fz--25'>Модуль:</p>
                        <div className="modul--indicator">
                            <span className='modul--text fz--25 modul--indicator--text'>BB-E8E3</span>
                        </div>
                    </div>
                    <div className="modul--center">
                        <StateElement type={2} title="Прочность" value={durability_E8E3} sign="%"/>
                        <StateElement type={2} title="Можно дышать в секторе?" text={can_breathe_E8E3}/>
                        <StateElement type={2} title="Время до стабилизации атмосферы" value={time_stabilisation_E8E3} sign=" сек"/>
                        <StateElement type={2} title="Текущее давление" value={pressure_E8E3} sign="мм"/>
                    </div>

                    <div className="modul--footer">
                        <p className="Atmosfer-System-text fz--15">Состояние атмосферы</p>
                        <StateElement type={3} title="Объём С0" value={CO2_E8E3} sign="%"/>
                        <StateElement type={3} title="Объём 0" value={O2_E8E3} sign="%"/>
                        <StateElement type={3} title="Объём N" value={N2_E8E3} sign="%"/>
                        <StateElement type={4} title="Объём остальных газов" value={Other_E8E3} sign="%"/>
                    </div>
                    
                    
                </div>
                
                
            );
            break;
        case 'BT-0010':
            modalContent = (
                <div>
                    <div className='modul'>
                    <div className="modul--top">
                        <p className='modul--text fz--25'>Модуль:</p>
                        <div className="modul--indicator">
                            <span className='modul--text fz--25 modul--indicator--text'>BT-0010</span>
                        </div>
                    </div>
                    <div className="modul--center">
                        <StateElement type={2} title="Прочность" value={durability_0010} sign="%"/>
                        <StateElement type={2} title="Время до стабилизации температуры" value={time_stabilisation_0010} sign=" сек"/>
                        <StateElement type={2} title="Текущая температура в секторе" value={temp_E8E3} sign="°C"/>
                    </div>

                    
                    
                    </div>
                </div>
            );
            break;
        case 'CGH-C8C7':
            modalContent = (
                <div>
                    <div className='modul'>
                    <div className="modul--top">
                        <p className='modul--text fz--25'>Модуль:</p>
                        <div className="modul--indicator">
                            <span className='modul--text fz--25 modul--indicator--text'>CGH-C8C7</span>
                        </div>
                    </div>
                    <div className="modul--center">
                        <StateElement type={2} title="Прочность" value={durability_C8C7} sign="%"/>
                        <StateElement type={2} title="Время до стабилизации влажности" value={time_stabilisation_C8C7} sign=" сек"/>
                        <StateElement type={2} title="Текущая влажность в секторе" value={wet_C8C7} sign="%"/>
                    </div>

                    
                    
                    </div>
                </div>
            );
            break;
        default:
            modalContent = null;
    }

    return ( 
        <>
        <div className={`Atmosfer-System--wrapper ${isBlur ? 'blur' : ''}`}>
                    <p className='Atmosfer-System-text'>Аппараты балансировки атмосферного давления</p>


                    {apparats.map((apparat, ix) => (
                        <div className={`Atmosfer-system-apparat--wrapper`}>
                        <div className="Atmosfer-system-apparat--indicator"/>
                        
                        <div className={`Atmosfer-system-apparat--durability--container `}>
                        <p className='Atmosfer-system-apparat--durability--text'>Прочность<br></br>{apparat.pressure_balancer.overall_durability}%</p>
                        </div>
                        <button className='Atmosfer-system-apparat--button' onClick={() => openModal('BB-E8E3', 'big-size', ix)}>BB-E8E3</button>
                        <button className='Atmosfer-system-apparat--button' onClick={() => openModal('BT-0010', 'small-size', ix)}>BT-0010</button>
                        <button className='Atmosfer-system-apparat--button' onClick={() => openModal('CGH-C8C7','small-size', ix)}>CGH-C8C7</button>

                        <span className='Atmosfer-system-apparat--sector'>{sector}</span>
                    </div>
                    ))}
                        

                        
                        
                </div>
                {selectedApparat && ( // Отображаем модальное окно, если selectedApparat установлен
                    <div className={`modal ${modalSize} `}>
                        <div className="modal-container">
                            <span className="close" onClick={closeModal}>&times;</span>
                            {modalContent} {/* Выводим содержимое в зависимости от выбранного элемента */}
                        </div>
                    </div>
                )}
               
               </>
            
        
    )
}

export default AtmosphereSystem;