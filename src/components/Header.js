import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
return(
    <nav className="navbar navbar-dark">
    <a className="navbar-brand" href="https://tfl.gov.uk/">
     <img src="https://i.pinimg.com/originals/94/6e/79/946e798d26443cea7151e2ab8dabaf85.jpg"
      className="brand-image"/>
    </a>
    <span className="mx-auto">
    <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMA6T7UbkpLoDh912qfL4GnpEO9xQW131L9JHBJgWtHxleru-j&usqp=CAU" 
    className ="header-tex-image mx-2 my-auto"
     alt="Tfl information" /> 
    <a className ="header-text" href="https://tfl.gov.uk/">
     Transport For London
    </a>
    <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMA6T7UbkpLoDh912qfL4GnpEO9xQW131L9JHBJgWtHxleru-j&usqp=CAU" 
    className ="header-tex-image mx-2 my-auto"
     alt="Tfl information" /> 
    </span>  
    
     <img src="https://i.pinimg.com/originals/94/6e/79/946e798d26443cea7151e2ab8dabaf85.jpg"
      className="brand-image"/>
   </nav>
)
}


export default Header;