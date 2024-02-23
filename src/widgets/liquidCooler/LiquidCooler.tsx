import React from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./LiquidCooler.css"
import SectionTitle from 'entities/sectionTitle/SectionTitle'


const LiquidCooler: React.FunctionComponent = () => {
    const [fillPercentage, setFillPercentage] = useState(87);

    return (
        <div className="liquid-cooler">
            <SectionTitle titleType={4} titleText="Охладитель жидкости" />

            <div className="liquid-cooler-container">
                <span className="liquid-cooler-text">Уровень хладогента</span>
                <span className="liquid-cooler-value">{fillPercentage}%</span>
            </div>
        </div>
    )
}


export default LiquidCooler;