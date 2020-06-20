import React, { useEffect, useState } from "react";
import VehicleName from "./showVehicleName";
import "bootstrap/dist/css/bootstrap.css";

const Mode = ({nameVehicle}) => {
    
    const[dataForNewMode, setDataForNewMode] = useState([]);
    const[line,setLine] = useState("");

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Line/Mode/${nameVehicle}`)
        .then((res) => res.json())
        .then((data) => {     
        setDataForNewMode(data);
     })
        .catch(() => "Can’t access  to the response.");
      },[nameVehicle]);

    function handleLine(event){ 
    if(event.target.value !== "Mode of Transport..."){
      const newLine = event.target.value;
      setLine(newLine);
      console.log(dataForNewMode.length);}
    else{
      setLine("please choose your transportation mode");
    }
   }

  let mode;
  if(dataForNewMode.length !== 0){
    mode =(
    <div className="form-group">
      <select className="form-control my-4 mb-5 mx-auto"
       onChange = {event => handleLine(event)}>
        <option>Mode of Transport...</option>
        {dataForNewMode.map((eachVehicle, index) => {
          return (
            <option key={index} className="text-center">
              {eachVehicle.id}
            </option>
         )
        })
        }
      </select>
      <VehicleName 
      line ={line}
       />
    </div>
    )
   }
   else{
     mode =(
      <div className="form-group">
      <select className="form-control my-4 mb-5 mx-auto"
       onChange = {event => handleLine(event)}>
        <option>Mode of Transport...</option>
        {dataForNewMode.map((eachVehicle, index) => {
          return (
            <option key={index} className="text-center">
              {eachVehicle.id}
            </option>
         )
        })
        }
      </select>
      <VehicleName 
      line ={"Sorry,We do not support this transportation mode"}
       />
    </div>
     )
   }
  
  return (
    <div>
        {mode}
    </div>
  );
};


export default Mode;
