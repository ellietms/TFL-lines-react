import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ShowSelectedLine = ({ selectedLine, nameVehicle }) => {
  const [dataForSelectedLine, setDataForSelectedLine] = useState([]);
  useEffect(() => {});
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => setDataForSelectedLine(data.routeSections[0]))
      .catch((error) => console.log("Sorry" + error.status));
  }, [selectedLine]);

  let showSelectedLine;
  if (dataForSelectedLine.length === 0) {
    return (
      <div>
        <div>
          <div className="card  mb-3 start-line">
            <div className="card-header">
              {nameVehicle} : {selectedLine}
            </div>
            <div className="card-body">
              <h5 className="card-title">No LINE</h5>
              <p className="card-text">
                please,try to choose your transportation mode
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (selectedLine !== "Mode of Transport...") {
      showSelectedLine = (
        <div>
          <div className="card mb-3 start-line ">
            <div className="card-header">
              {nameVehicle} - {selectedLine}
            </div>
            <div className="card-body">
              <h5 className="card-title">START OF LINE</h5>
              <p className="card-text">{dataForSelectedLine.originationName}</p>
            </div>
          </div>
          <div className="card mb-3 start-line ">
            <div className="card-header">
              {nameVehicle} - {selectedLine}
            </div>
            <div className="card-body">
              <h5 className="card-title">END OF LINE</h5>
              <p className="card-text">{dataForSelectedLine.destinationName}</p>
            </div>
          </div>
        </div>
      );
    } else {
      showSelectedLine = (
        <div>
          <div className="card mb-3 start-line ">
            <div className="card-header">
              {nameVehicle} - {selectedLine}
            </div>
          </div>
          <div className="card mb-3 start-line ">
            <div className="card-header">
              {nameVehicle} - {selectedLine}
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      );
    }
  }
  return <div>{showSelectedLine}</div>;
};

export default ShowSelectedLine;
