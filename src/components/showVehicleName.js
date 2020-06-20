import React from "react";

const VehicleName = ({line}) => {
  return (
    <p className="nameVehicle ml-2">
      <span
        className="selectedMode font-weight-bold
         mx-auto p-4 d-flex"
      >    
        You selected mode:{line}
      </span>
    </p>
  );
};

export default VehicleName;
