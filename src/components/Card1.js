import './Card.css';
import React, { useState } from 'react';

export default function Card1 (props) {
   return (
      <div className='Card'>
         <h3 className='Title'>{props.title}</h3>

         { <div className='Content'>{props.children}</div> }
      </div>
   )
}