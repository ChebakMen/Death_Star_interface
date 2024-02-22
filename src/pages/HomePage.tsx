import React from 'react'
import styled from 'styled-components'

import LiquidStorage from '../widgets/liquidStorage/LiquidStorage'
import AtmosphereGenerator from '../widgets/atmosphereGenerator/AtmosphereGenerator'
import Magneticsystem from 'widgets/magneticSystem/Magneticsystem'
import SectionTitle from 'entities/sectionTitle/SectionTitle'


const Home: React.FunctionComponent = () => {
    return (
        <>  
        
            {/* <SectionTitle titleType={1} titleText="Жидкостное хранилище" /> */}

            <HomeCont>
                    <LiquidStorage />
                    <Magneticsystem/>
                    <AtmosphereGenerator/>
                    <Magneticsystem/>
            </HomeCont>
        </>
    )   
}

export default Home


const HomeCont = styled.div`
    
    display: grid;
    gap: 57px;
    width: 962px;
    height: 682px;
    margin-left: 252px;
    margin-top: 174px;
    grid-template-columns: repeat(2, 453px);
    grid-template-rows: repeat(2, 312px);

`