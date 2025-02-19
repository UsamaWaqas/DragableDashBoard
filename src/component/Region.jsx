import React, { useState } from 'react'
import DropDown from './DropDown'

function Region() {
    const [data,setdata] = useState('');

    const [Icon,setIcon] = useState('');

    const [unit,setunit] = useState('');

  const HandleUnit = (e)=>{
    setunit(e.target.value)
  }

  const HandleData = (e)=>{
    setdata(e.target.value)
  }

  const HandleIcon = (e)=>{
    setIcon(e.target.value)
  }

  const Data = [
   
    { label: "battery", value: 20 },
    { label: "Break In", value: 21 },
    { label: "Impact", value: 22 }
  ];

  const Unit = [
   
    { label: "Energy", value: 20 },
    { label: "Break In", value: 21 },
    { label: "Impact", value: 22 }
  ];

  const icon = [

    { label: "AC Current", value: 20 },
    { label: "Asset", value: 21 },
    { label: "Air", value: 22 }
  ];

 


  return (
    <div className="w-[752] mt-4 h-[150px] rounded-lg shadow-lg bg-gray-100">
                    

                    <div className="flex  m-4">
                      <DropDown 
                      label="Data"
                      className={`bg-gray-200`}
                      value={data}
                      onChange={HandleData}
                      options={Data}
                      minWidth={200}
                      />
                      <DropDown 
                      label="Icon"
                      onChange={HandleIcon}
                      value={Icon}
                      minWidth={200}
                      options = {icon}
                      />
                       <DropDown 
                       label="Unit"
                       onChange={HandleUnit}
                       value={unit}
                        className={`bg-gray-200`}
                        options= {Unit}
                      minWidth={200}
                      />

                    </div>

                  </div>
  )
}

export default Region
