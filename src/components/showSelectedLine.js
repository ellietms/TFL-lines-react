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
  console.log(dataForSelectedLine);

  let SelectedLine;
  if (dataForSelectedLine.length === 0) {
    return (
      <div>
        <div>
          <div className="card text-white bg-info mb-3">
            <div className="card-header">
              {nameVehicle} : {selectedLine}
            </div>
            <div className="card-body">
              <h5 className="card-title">START OF LINE</h5>
              <p className="card-text">
                Sorry We do not have any transportation for this line
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    SelectedLine = (
        <div className="card mb-3 start-line ">
          <div className="card-header">
            {nameVehicle} : {selectedLine}
          </div>
          <div className="card-body">
            <h5 className="card-title">START OF LINE</h5>
            <p className="card-text">{dataForSelectedLine.originationName}</p>
          </div>
        </div>
    );
  }
  return <div>{SelectedLine}</div>;
};

export default ShowSelectedLine;
