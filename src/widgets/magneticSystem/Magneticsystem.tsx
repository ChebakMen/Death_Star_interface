import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useState } from 'react'

import "./Magneticsystem.css"
import SectionTitle from 'entities/sectionTitle/SectionTitle'

type Inductor = {
    name: string
    is_on: boolean
    durability: number
    storable_energy: number
    electromotive_force: number
    starter_current: number
    output_current: number
    current_loss: number
    q_factor: number
};

const Magneticsystem: React.FunctionComponent = () => {

    const [inductors, updateInductors] = useState<Inductor[] | []>([]); 
    useEffect(() => {
        updateInductors([
           ...inductors,
            ...Array<Inductor>(24).fill({
                name: "",
                is_on: true,
                durability: 0,
                storable_energy: 0,
                electromotive_force: 0,
                starter_current: 0,
                output_current: 0,
                current_loss: 0,
                q_factor: 0,
            })
        ]);
    }, []);

    return (
        <div className="magnetic-system">
            <SectionTitle titleType={2} titleText="Магнитная система" value={87}/>
            <div className="magnetic-system--container">
                <p className='magnetic-system--text'>Индукторы</p>
                <div className="inductors">
                    {inductors.map((inductor, ix) => (
                        <div className="magnetic-system--inductor-indicator"></div>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}


export default Magneticsystem;