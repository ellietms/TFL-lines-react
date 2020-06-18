import React,{useEffect,useState}from 'react';
import Header from './components/Header';
import Select from './components/Select';
import Mode from './components/Mode';
import VehicleName from './showVehicleName';
import './App.css';




function App(){

const[dataTfl,setDataTfl] = useState([]);
const[nameVehicle,setNameVehicle]= useState("");
const[loading,setLoading] = useState(true);
const[dataForNewMode, setDataForNewMode] = useState([]);

useEffect(() => {

},[])

useEffect(() => {
  fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
  .then(res => res.json())
  .then(data => setDataTfl(data))
  .catch(() => "Can’t access  to the response.")
},[]);


useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${nameVehicle}`)
    .then((res) => res.json())
    .then((data) => {
    setLoading(!loading);    
    setDataForNewMode(data);})
    .catch(() => "Can’t access  to the response.");
  },[nameVehicle]);


function handleNameVehicle(event) {
  if(event.target.value  !== "Choose a Mode of Transport...")
  {
  const nameVehicle = event.target.value;
  setNameVehicle(nameVehicle)
  console.log(nameVehicle);
  }
  else{
  setNameVehicle("please choose your transportation mode")
  }
}
  

return (
<div className="App">
<Header /> 

<Select 
handleNameVehicle ={handleNameVehicle}
dataTfl={dataTfl}
nameVehicle ={nameVehicle}
// setDataTfl={setDataTfl}
/>

{ ({nameVehicle} !== "") &&
   <Mode 
     handleNameVehicle = {handleNameVehicle}
     nameVehicle={nameVehicle}
     dataForMode={dataForNewMode}
     />
}

<VehicleName 
nameVehicle ={nameVehicle}/>
</div>  
)}



export default App;
