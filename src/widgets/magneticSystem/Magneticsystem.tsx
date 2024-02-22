import React from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./Magneticsystem.css"
import SectionTitle from 'entities/sectionTitle/SectionTitle'


const Magneticsystem: React.FunctionComponent = () => {
    const [fillPercentage, setFillPercentage] = useState(80);

    return (
        <div className="magnetic-system">
            <SectionTitle titleType={2} titleText="Магнитная система" value={87}/>
            <div className="magnetic-system--container">
                <p className='magnetic-system--text'>Индукторы</p>
                <div className="inductors">
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                    <div className="magnetic-system--inductor-indicator"></div>
                </div>
                
            </div>
            
        </div>
    )
}


export default Magneticsystem;