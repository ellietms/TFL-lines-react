import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Select = ({dataTfl}) => {
return(
    <div className="form-group">
    <select className="form-control my-4" id="exampleFormControlSelect1">
    <option className=""> Choose a Mode of Transport...</option>    
    {dataTfl.map((eachVehicle,index) => 
    <option key={index} className="text-center">{eachVehicle.modeName}</option>
    )}
    </select>
    </div>
)
}


export default Select;