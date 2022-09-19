import React from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";


const Header = () => {
  return (
    <MainHeader>
     <NavLink to="/">  
             <div className='logo'></div>
           </NavLink>
        <Navbar />
    </MainHeader>
  )
}


const MainHeader=styled.header`
   padding:0 4.8rem;
   height:10rem;
   background-color:white;
   display:flex;
   justify-content:space-between;
   align-items:center;
   
   
   .logo{
    height:auto;
    max-width:30%;
    align-item:center;
   }

  
`;

export default Header