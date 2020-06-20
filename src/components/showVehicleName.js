import React from "react";

const VehicleName = ({line,nameVehicle}) => {
  return (
    <p className="nameVehicle ml-2">
      <span
        className="selectedMode font-weight-bold
         mx-auto p-4 d-flex"
      >    
        {nameVehicle} - {line}
      </span>
    </p>
  );
};

export default VehicleName;
