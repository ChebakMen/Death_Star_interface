import React from 'react'
import styled from 'styled-components'
import AtmosphereGenerator from '../widgets/atmosphereGenerator/AtmosphereGenerator';
import 'HomePage.css';


const Home: React.FunctionComponent = () => {
    return (
        <div className="App">
        
          <div className="container">
            <div className="models__wrap">
              <AtmosphereGenerator /> 
              <AtmosphereGenerator /> 
              <AtmosphereGenerator /> 
              <AtmosphereGenerator /> 
            </div>
        
          </div>
        </div>
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