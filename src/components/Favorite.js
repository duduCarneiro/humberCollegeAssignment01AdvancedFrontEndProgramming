import React, { useState } from 'react';
import '../App.css';
import './Card.css';
import star from '../star.jpeg';
import star2 from '../star2.png';


export default function Favorite (props) {


   return (
      <img className='Star' onClick={props.getFav} style={{width: "25px"}} src={props.selected ? star : star2}alt="fav"/>

   )
}