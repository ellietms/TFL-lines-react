import React from 'react';

const VehicleName = ({nameVehicle}) => {
    return(
        <p className="nameVehicle ml-2">You selected mode:<span className="font-weight-bold
        text-dark ml-1">
            {nameVehicle}
            </span>
       </p>
    )
}


export default VehicleName;