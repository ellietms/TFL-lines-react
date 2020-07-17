import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import Mode from "./components/Mode";
import "./App.css";

function App() {
  const [dataTfl, setDataTfl] = useState([]);
  const [nameVehicle, setNameVehicle] = useState(null);
  const [line, setLine] = useState("");

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
      setLine("");
  }

  return (
    <div className="App">
      <Header />
      <Select
        handleNameVehicle={handleNameVehicle}
        dataTfl={dataTfl}
      />

      {(nameVehicle !== null) &&
       <Mode 
       nameVehicle={nameVehicle}
       setNameVehicle={setNameVehicle}
       line={line}
       setLine={setLine}
       />}
    </div>
  );
}

export default App;
