import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
         {/* <!-- //NAVBAR------------------------------------------------- --> */}
  <header>
    <div class="content flex_space">
      <div class="logo">
        <img src="assert/image/logo.png" alt=""/>
      </div>
      <div class="navlink">
        <ul id="menulist">
        <li><Link  to="/">Home</Link></li>
          {/* <li> <a href="#home">home</a> </li> */}
          <li> <a href="#about">about</a> </li>
          <li> <a href="#rooms">rooms</a> </li>
          <li> <a href="#pages">pages</a> </li>
          <li> <a href="#wedding and events">Wedding and Events</a> </li>
          <li> <a href="#contact">contact</a> </li>
          <li> <i class="fa fa-search"></i> </li>
          <li> <button class="primary-btn">BOOK NOW</button> </li>
        </ul>
          <span class="fa fa-bars" onclick="menutoggle()"></span>  
      </div>
    </div>
  </header>
  

 {/* <!-- ---------------------------------------------------------------------------------- --> */}
    </div>
  )
}
