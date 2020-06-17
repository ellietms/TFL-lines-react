import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Select = ({eachVehicle}) => {
return(
    <div class="form-group">
    <label for="exampleFormControlSelect1">Choose a Mode of Transport...</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>{eachVehicle}</option>
    </select>
  </div>
)
}



export default Select;