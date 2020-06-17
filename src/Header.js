import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
return(
    <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="https://tfl.gov.uk/">
    <img 
    src="https://lh3.googleusercontent.com/proxy/Cmlxw9dv2t2lyfJXEEza7HsxP6Zku5e8cAMTLvIxqELzD6SLqt9yb4EXSVsW4mPWFEW85Khq4nHYzH6eMJaV3-tvXpT6530J-Kyjoncb1r2G7LvgCfxSp04QsA" 
    width="100"  alt="Tfl information" /> 
    </a>
    <span className="mx-auto">
        <a className ="header-text" href="https://tfl.gov.uk/">Transport For London</a>
    </span>  
   </nav>
)
}


export default Header;