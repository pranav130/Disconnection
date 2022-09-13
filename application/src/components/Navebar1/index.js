import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavebarElements";

const Navbar = () => {
return (
	<>   
	
	<Nav className="justify-content-center">
		
	<a className="navbar-brand" href="#"><img src={require('./logo.jpg')} height={78} width={80} /> <b>UPPCL Disconnection Portal</b></a>
		
		
	</Nav>
	</>
);
};

export default Navbar;
