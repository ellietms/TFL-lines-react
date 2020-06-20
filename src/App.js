import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import Mode from "./components/Mode";
import "./App.css";

function App() {
  const [dataTfl, setDataTfl] = useState([]);
  const [nameVehicle, setNameVehicle] = useState(null);
  useEffect(() => {}, []);

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
      .then((res) => res.json())
      .then((data) => setDataTfl(data))
      .catch(() => "Can’t access  to the response.");
  }, []);

  function handleNameVehicle(event) {
      const nameVehicle = event.target.value;
      setNameVehicle(nameVehicle);
  }

  return (
    <div className="App">
      <Header />
      <Select
        handleNameVehicle={handleNameVehicle}
        dataTfl={dataTfl}
        nameVehicle={nameVehicle}
      />

      {(nameVehicle !== null) &&
       <Mode 
       nameVehicle={nameVehicle}
       setNameVehicle={setNameVehicle}/>}
    </div>
  );
}

export default App;
