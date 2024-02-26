import React from 'react'
import styled from 'styled-components'
import "styles/HomePage.css"

import LiquidStorage from '../widgets/liquidStorage/LiquidStorage'
import AtmosphereGenerator from '../widgets/atmosphereGenerator/AtmosphereGenerator'
import Magneticsystem from 'widgets/magneticSystem/Magneticsystem'
import SectionTitle from 'entities/sectionTitle/SectionTitle'
import PlasmaGenerator from 'widgets/plasmaGenerator/PlasmaGenerator'
import LiquidCooler from 'widgets/liquidCooler/LiquidCooler'
import AccountStormtrooper from 'entities/accountStormtrooper/AccountStormtrooper'
import BrokenModulesList from 'widgets/BrokenModulesList/BrokenModulesList'

const Home: React.FunctionComponent = () => {
    return (
        <>  
            <div className="home__container">
                <SectionTitle titleType={3} titleText="DEATH STAR" />
                <AccountStormtrooper numer={1}/>
                <HomeCont__grid>

                    <LiquidStorage />

                    <Magneticsystem/>
                    <AtmosphereGenerator/>
                    <Blocs>
                        <PlasmaGenerator/>
                        <LiquidCooler/>
                    </Blocs>
                </HomeCont__grid>
                
                <BrokenModulesList />
            </div>
        </>
    )   
}

export default Home


const HomeCont__grid = styled.div`
    
    display: grid;
    gap: 57px;
    width: 962px;
    height: 682px;
    margin-left: 13vw;
    margin-top: 4vh;
    grid-template-columns: repeat(2, 453px);
    grid-template-rows: repeat(2, 312px);

`

const Blocs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
`



