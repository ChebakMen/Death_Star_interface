import React from 'react'
import styled from 'styled-components'

import LiquidStorage from '../widgets/liquidStorage/LiquidStorage'


const Home: React.FunctionComponent = () => {
    return (
        <LiquidStorage/>
    )
}

export default Home


const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`