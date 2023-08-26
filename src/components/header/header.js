import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./header.css"




function Header(){
  
    return (
        <>
        <nav className="nav-container">
          <div className="logo">MasBal</div>
          <div className="nav-item-container">
            <div className="nav-items">
              <a href="#">Home</a>
            </div>
            <div className="nav-items">
              <a href="#">WhoAmI</a>
            </div>
            <div className="nav-items">
              <a href="#">MyArt's</a>
            </div>
            <div className="nav-items">
              <a href="#">FindMeOn</a>
            </div>
            <div className="nav-items">
              <a href="#">WhatElse</a>
            </div>
          </div>
        </nav>
      </>
    )
  }

export default Header