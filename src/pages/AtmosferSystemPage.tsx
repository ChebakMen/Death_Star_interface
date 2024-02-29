import AccountStormtrooper from 'entities/accountStormtrooper/AccountStormtrooper'
import SectionTitle from 'entities/sectionTitle/SectionTitle'
import React from 'react'
import styled from 'styled-components'




const AtmosferSystem: React.FunctionComponent = () => {
    return (
        
        <div className="home__container">
                <SectionTitle titleType={5} titleText="Система генератора атмосферы корабля"/>
                <AccountStormtrooper numer={2} />
                
            </div>
    )
}

export default AtmosferSystem


