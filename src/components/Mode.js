import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Mode = ({dataForNewMode}) => {
  return (
    <div className="form-group">
      <select className="form-control my-4 mb-5 mx-auto">
        <option> Mode of Transport...</option>
        {dataForNewMode.map((eachVehicle, index) => {
          return (
            <option key={index} className="text-center">
              {eachVehicle.id}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Mode;
