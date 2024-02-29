import React from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./PlasmaGenerator.css"
import SectionTitle from 'entities/sectionTitle/SectionTitle'


const PlasmaGenerator: React.FunctionComponent = () => {
    const [fillPercentage, setFillPercentage] = useState(87);

    return (
        <div className="plasma-generator">
            <SectionTitle titleType={4} titleText="Генератор плазмы" />

            <div className="plasma-generator-container">
                <span className="plasma-generator-text">Эфективность</span>
                <span className="plasma-generator-value">{fillPercentage}%</span>
            </div>
        </div>
    )
}


export default PlasmaGenerator;