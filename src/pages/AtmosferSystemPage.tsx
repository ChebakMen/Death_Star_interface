import AccountStormtrooper from 'entities/accountStormtrooper/AccountStormtrooper'
import SectionTitle from 'entities/sectionTitle/SectionTitle'
import React, { useCallback, useState } from 'react'

import "../styles/AtmosferSystemPage.css"
import StateElement from 'entities/StateElement/StateElement'
import AtmosphereSystem from 'widgets/Atmosfer-system/Atmosphere-system'



const AtmosferSystem: React.FunctionComponent = () => {

    const [durability, updateDurability] = useState<number>(89);

    type System_state = {
        atmospheric_pressure: number
        temperature: number
        humidity: number
        durability: number
    }

    type Pressure_balancer = {
        name: string
        is_on: boolean
        overall_durability: number
        bb_e8e3_is_on: boolean
        bt_0010_is_on: boolean
    }

    type Humidity_controller = {
        name: string
        is_on: boolean
        durability: number
        time_before_stabilize_ms: number
        current_humidity: number
    }

    type Pressure_stabilizer = {
        name: string
        is_on: boolean
        durability: number
        pressure_is_fine: boolean
        time_before_stabilize_ms: number
        current_pressure_mmhg: number
        co2_volume: number
        o2_volume: number
        n2_volume: number  
        another_volume: number
    }

    type Temperature_stabilizer = {
        name: string
        is_on: boolean
        time_before_stabilize_ms: number
        current_temperature: number
    }

    // Все для E8E3
    const [durability_E8E3, updateDurability_E8E3] = useState<number>(89);
    const [can_breathe_E8E3, updateСan_breathe] = useState<string>("Да");
    const [time_stabilisation_E8E3, updateTime_stabilisation_E8E3] = useState<number>(2);
    const [pressure_E8E3, updatePressure_E8E3] = useState<number>(2);
    const [CO2_E8E3, updateCO2_E8E3] = useState<number>(2.9);
    const [O2_E8E3, updateO2_E8E3] = useState<number>(18);
    const [N2_E8E3, updateN2_E8E3] = useState<number>(78);
    const [Other_E8E3, updateOther_E8E3] = useState<number>(1.1);

    // Все для 0010
    const [durability_0010, updateDurability_0010] = useState<number>(89);
    const [time_stabilisation_0010, updateTime_stabilisation_0010] = useState<number>(2);
    const [temp_E8E3, updateTemp_E8E3] = useState<number>(29);
    
    // Все для C8C7
    const [durability_C8C7, updateDurability_C8C7] = useState<number>(89);
    const [time_stabilisation_C8C7, updateTime_stabilisation_C8C7] = useState<number>(2);
    const [wet_C8C7, updateWet_C8C7] = useState<number>(29);


    

    const [selectedApparat, setSelectedApparat] = useState<string | null>(null);
    const [modalSize, setModalSize] = useState<string>('modal-small');
    const [isBlur, setIsBlur] = useState<boolean>(false);

    const [sector, updateSector] = useState<string>("Сектор:933");

    

    


    return (
        <div className='Atmosfer-System--container'>
                <SectionTitle titleType={5} titleText="Система генератора атмосферы корабля"/>
                <AccountStormtrooper numer={2} />
                <AtmosphereSystem/>
        </div>        
        
    )
}

export default AtmosferSystem


