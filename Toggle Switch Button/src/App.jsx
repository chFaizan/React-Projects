import { useState } from 'react'
import './App.css'
import { IoIosSwitch } from "react-icons/io";


function App() {
const [isOn, setisOn] = useState(false);

const handleToggleSwitch=()=>{
  setisOn(!isOn);

}
const tglechange = [isOn ? "on" : "off"];
  return (
    <>
    <div className="toggle-switch" onClick={handleToggleSwitch}>
      <div className={`switch ${tglechange}`} >
        <span className='switch-state'>
          {tglechange}
        </span>
      </div>
    </div>
    <h2><IoIosSwitch />
    </h2>
    </>
  )
}

export default App
