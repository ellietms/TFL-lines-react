import React from "react";

const VehicleName = ({line,nameVehicle}) => {
  return (
    <p className="mx-auto">
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
