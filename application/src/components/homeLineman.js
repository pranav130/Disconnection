import React from 'react'
import { Link } from 'react-router-dom';
import NavbarLineman from './NavbarLineman';
import companyLogo from './img2.png';
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
    <NavbarLineman />
    <br />
    <div className='heading1'>

<h3><u>Welcome to UPPCL</u></h3>
</div>
<div className='rowC'>
<div className='about1'>
The creation of Uttar Pradesh Power Corporation Ltd. (UPPCL) on January 14, 2000 is the result of power sector reforms and restructuring in UP (India) which is the focal point of the Power Sector, responsible for planning and managing the sector through its transmission, distribution and supply of electricity.

UPPCL will be professionally managed utility supplying reliable and cost efficient electricity to every citizen of the state through highly motivated employees and state of art technologies, providing an economic return to our owners and maintaining leadership in the country.
</div>
<div className='image1'>
      <img src={companyLogo}/>
    </div>
</div>
  
    </>
  )
}
