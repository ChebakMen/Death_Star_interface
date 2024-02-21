import React from 'react'
import styled from 'styled-components'

import LiquidStorage from '../widgets/liquidStorage/LiquidStorage'
import AtmosphereGenerator from '../widgets/atmosphereGenerator/AtmosphereGenerator'
import Magneticsystem from 'widgets/magneticSystem/Magneticsystem'


const Home: React.FunctionComponent = () => {
    return (
        <>
           <HomeCont>
                <LiquidStorage />
                <Magneticsystem/>
           </HomeCont>
        </>
    )   
}

export default Home


const HomeCont = styled.div`
    display: flex;
    gap: 57px;
`