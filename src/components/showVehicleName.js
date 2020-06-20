import React from "react";

const VehicleName = ({ line }) => {
  console.log(line);
  return (
    <p className="nameVehicle ml-2">
      <span
        className="font-weight-bold
        text-dark mx-auto p-4 d-flex border border-danger"
      >
        You selected mode:{line}
      </span>
    </p>
  );
};

export default VehicleName;
