import styled from 'styled-components';
import React, { FC, useState,ReactNode } from "react";
import "./AtmosphereGenerator.css";
import SectionTitle from 'entities/sectionTitle/SectionTitle'
import StateElement from 'entities/StateElement/StateElement'



const AtmosphereGenerator:FC = () => {
    
    const [duration, updateDuration] = useState<number>(80);
    const [temperature, updateTemperature] = useState<number>(24);
    const [pressure, updatePressure] = useState<number>(750);
    const [humidity, updateHumidity] = useState<number>(60);

    return ( 
        <>  
        <div className="AtmosphereGenerator__wrap">

            <SectionTitle titleType={1} titleText="Генератор атмосферы" />

            <StateElement type={1} title="Прочность" value={duration} sign="%"/>
            <StateElement type={1} title="Текущая температура" value={temperature} sign="°C"/>
            <StateElement type={1} title="Текущее давление" value={pressure} sign="мм"/>
            <StateElement type={1} title="Текущая влажность" value={humidity} sign="%"/>

            <div className="models">
                <div className="models__indicator"></div>
                <p className="text--modal">Работа аппаратов балансировки атмосферного давления</p>
            </div>

        </div>
            
        </>
    )
}

export default AtmosphereGenerator;