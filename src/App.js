import React,{useEffect,useState}from 'react';
import Select from './Select';
import './App.css';

function App() {
const [dataTfl,setDataTfl] = useState();

useEffect(()=>{
  fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
  .then(res => res.json())
  .then(data => setDataTfl(data));
},[]);

console.log(dataTfl);

return (
    <div className="App">
      <Select dataTfl={dataTfl}/>
    </div>
);
}


export default App;
