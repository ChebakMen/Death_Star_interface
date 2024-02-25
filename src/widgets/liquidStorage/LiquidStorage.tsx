import React from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./LiquidStorage.css"


const LiquidStorage: React.FunctionComponent = () => {
    const [fillPercentage, setFillPercentage] = useState(80);

    return (
        <div className="liquid-storage">
            <h2 className="title-system">Жидкостное хранилище</h2>
            <div className="liquid-storage-container">
                <div className="liquid-storage-level">
                    <div className="liquid-storage-fill" style={{ height: `${fillPercentage}%` }}></div>
                </div>
                <div className="liquid-storage-indicator">
                    <span className="liquid-storage-indicators-text">Прочность</span>
                    <span className="liquid-storage-indicators-value">{fillPercentage}%</span>
                </div>
            </div>
        </div>
    )
}


export default LiquidStorage