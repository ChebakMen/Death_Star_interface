import React from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./LiquidStorage.css"
import SectionTitle from 'entities/sectionTitle/SectionTitle'


const LiquidStorage: React.FunctionComponent = () => {
    const [fillPercentage, setFillPercentage] = useState(80);

    return (
        <div className="liquid-storage">
            <SectionTitle titleType={1} titleText="Жидкостное хранилище" />
            
            <div className="liquid-storage-container">
                <div className="liquid-storage-level">
                    <div className="liquid-storage-fill" style={{ height: `${fillPercentage}%` }}></div>
                </div>
                <div className="indicators">
                    <div className="liquid-storage-indicator">
                        <span className="liquid-storage-indicators-text">Прочность</span>
                        <span className="liquid-storage-indicators-value">{fillPercentage}%</span>
                    </div>
                    <div className="liquid-storage-indicator">
                        <span className="liquid-storage-indicators-text">Уровень</span>
                        <span className="liquid-storage-indicators-value">{fillPercentage}%</span>
                    </div>

                    <button className="refill">Пополнить</button>
                </div>
                
                
            </div>
        </div>
    )
}


export default LiquidStorage;