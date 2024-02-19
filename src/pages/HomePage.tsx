import React from 'react'
import styled from 'styled-components'



const Home: React.FunctionComponent = () => {
    return (
        <HomeText>HomePage</HomeText>
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