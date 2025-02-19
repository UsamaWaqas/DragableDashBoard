import React,{useState} from 'react'
import DropDown from './DropDown';
export default function LowerRegion() {

     const [data,setdata] = useState('');
    
        const [Icon,setIcon] = useState('');
    
        const [unit,setunit] = useState('');
        const [Decimal,setDecimal] = useState('');
    
      const HandleUnit = (e)=>{
        setunit(e.target.value)
      }
    
      const HandleData = (e)=>{
        setdata(e.target.value)
      }
    
      const HandleIcon = (e)=>{
        setIcon(e.target.value)
      }
      const HandleDecimal = (e)=>{
        setDecimal(e.target.value)
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

      const decimal = [
    
        { label: "AC Current", value: 20 },
        { label: "Asset", value: 21 },
        { label: "Air", value: 22 }
      ];

  return (
    <div>
      <div className="p-4 mt-4 bg-gray-100  shadow-lg rounded-xl">
              <div>
               <DropDown 
                      label="Data"
                      
                      value={data}
                      onChange={HandleData}
                      options={Data}
                     
                      />
              </div>
              <div>
              <DropDown 
                      label="Icon"
                     
                      value={data}
                      onChange={HandleIcon}
                      options={Data}
                     
                      />
              </div>
              <div>
              <DropDown 
                      label="Unit"
                      value={data}
                      onChange={HandleUnit}
                      options={Data}
                    
                      />
              </div>
              <div>
                <DropDown
                  label="Decimal"
                  onChange={HandleDecimal}
                  value={Decimal}
                  options={decimal}
                />
              </div>

          
          </div>
    </div>
  )
}
