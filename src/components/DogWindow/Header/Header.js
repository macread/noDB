import React from 'react';
import logo from './schroeder.png';
import './Header.css'

export default function Header(props) {
  return (
    <div className="Header-div">
        <img src={logo} className='Header-Logo' alt="of a Schnauzer" />
        <h1 className="Header-h1">Dog Namer</h1>
    </div> 
  )
}