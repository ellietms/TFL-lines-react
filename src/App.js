import React,{useEffect,useState}from 'react';
import Select from './Select';
import './App.css';

function App() {
const [dataTfl,setDataTfl] = useState();

useEffect(()=>{
  fetchData();
},[]);

const  fetchData = async() => {
  const data = await fetch("https://api.tfl.gov.uk/Line/Meta/Modes");
  const vehicles = await data.json();
  setDataTfl(vehicles);
}
  
console.log(dataTfl);

return (
    <div className="App">
      {dataTfl.map(eachVehicle => <Select eachVehicle={eachVehicle}/>)}
    </div>
);
}


export default App;
