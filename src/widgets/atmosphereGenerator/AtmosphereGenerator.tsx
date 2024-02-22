import styled from 'styled-components';
import React, { FC } from "react";
import "./AtmosphereGenerator.css";


const AtmosphereGenerator:FC = () => {
    return (
      <div className="wrap">
        <div className="title">
            <h1 className="title--text">Генератор атмосферы</h1>
        </div>

        <div className="TextAndValue">
            <p className="text">
                Прочность
            </p>
            <div className="value">87%</div>
        </div>
        <div className="TextAndValue">
            <p className="text">
                Текущая температура
            </p>
            <div className="value">87%</div>
        </div>
        <div className="TextAndValue">
            <p className="text">
                Текущее давление
            </p>
            <div className="value">87%</div>
        </div>
        <div className="TextAndValue">
            <p className="text">
                Текущая влажность
            </p>
            <div className="value">87%</div>
        </div>

        <div className="models">
            <div className="models__bulb"></div>
            <p className="text--modal">Работа аппаратов балансировки атмосферного давления</p>
        </div>


      </div>
    );
}


export default AtmosphereGenerator;