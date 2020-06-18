import React,{useEffect,useState}from 'react';
import Header from './components/Header';
import Select from './components/Select';
import VehicleName from './showVehicleName';
import './App.css';

function App() {
const[dataTfl,setDataTfl] = useState([]);
const[nameVehicle,setNameVehicle]= useState();


useEffect(() => {

},[])

useEffect(() => {
  fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
  .then(res => res.json())
  .then(data => setDataTfl(data))
  .catch(() => "Can’t access  to the response.")
},[]);



function handleNameVehicle(event) {
  if(event.target.value  !== "Choose a Mode of Transport...")
  {const newValue = event.target.value;
    setNameVehicle(newValue)
   console.log(nameVehicle);}
  else{
  setNameVehicle("please choose your vehicle")
  }
}
  

return (
<div className="App">
<Header /> 

<Select 
handleNameVehicle = {handleNameVehicle}
dataTfl={dataTfl}
nameVehicle ={nameVehicle}
/>

<VehicleName 
nameVehicle ={nameVehicle}/>
</div>  
)}



export default App;
