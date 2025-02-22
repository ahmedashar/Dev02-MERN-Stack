import React, { useState } from 'react'
import onBulb from "../assets/on.png"
import offBulb from "../assets/off.png"

const Bulb = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div>
            <p>The Bulb is {isOn ? "On" : "Off"}</p>
            {/* <button onClick={()=> {setIsOn(isOn? false : true)}}>Swtch Build</button> */}
            <button className="btn btn-primary" onClick={() => { setIsOn(!isOn) }}>Swtch Build</button>
            {isOn ?
                <div className='img-container'>
                    <img src={onBulb} alt="" />
                </div>
                :
                <div className='img-container'>
                    <img src={offBulb} alt="" />
                </div>
            }
        </div>
    )
}

export default Bulb
