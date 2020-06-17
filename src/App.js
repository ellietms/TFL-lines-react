import React,{useEffect,useState}from 'react';
import Header from './Header';
import Select from './Select';
import './App.css';

function App() {
const[dataTfl,setDataTfl] = useState([]);
const[nameVehicle,setNameVehicle]= useState([]);

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
  setNameVehicle(event.target.value)
  else
  setNameVehicle("you did not choose any vehicle")
}
  

return (
<div className="App">
<Header />    
<Select 
handleNameVehicle = {handleNameVehicle}
dataTfl={dataTfl}
nameVehicle ={nameVehicle}/>
</div>  
)}



export default App;
