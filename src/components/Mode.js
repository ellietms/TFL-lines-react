import React, { useEffect, useState } from "react";
import VehicleName from "./showVehicleName";
import ShowSelectedLine from "./showSelectedLine";
import "bootstrap/dist/css/bootstrap.css";

const Mode = ({ nameVehicle, setNameVehicle }) => {
  const [dataForNewMode, setDataForNewMode] = useState([]);
  const [line, setLine] = useState("");
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${nameVehicle}`)
      .then((res) => res.json())
      .then((data) => {
        setDataForNewMode(data);
      })
      .catch(() => "Can’t access  to the response.");
  }, [nameVehicle]);

  function handleLine(event) {
    if (event.target.value !== "Mode of Transport...") {
      const newLine = event.target.value;
      setLine(newLine);
      setNameVehicle(nameVehicle);
    } else {
      if (event.target.value === "Mode of Transport...")
        setLine("please choose your transportation mode");
    }
  }

  let lineSelected;
  if (dataForNewMode.length !== 0) {
    lineSelected = (
      <div className="form-group">
        <select
          className="form-control my-4 mb-5 mx-auto"
          onChange={(event) => handleLine(event)}
        >
          <option>Mode of Transport...</option>
          {dataForNewMode.map((eachVehicle, index) => {
            return (
              <option key={index} className="text-center">
                {eachVehicle.id}
              </option>
            );
          })}
        </select>
        <VehicleName nameVehicle={nameVehicle} line={line} />
        {line !== "" && (
          <ShowSelectedLine selectedLine={line} nameVehicle={nameVehicle} />
        )}
      </div>
    );
  } 
  else {
    lineSelected = (
      <div className="form-group">
        <VehicleName
          nameVehicle={nameVehicle}
          line={"Sorry,We do not support this transportation mode"}
        />
        {line !== "" && (
          <ShowSelectedLine selectedLine={line} nameVehicle={nameVehicle} />
        )}
      </div>
    );
  }

  return (
    <div>
      {lineSelected}
    </div>
  );
}

export default Mode;
