import React, { useState } from 'react';
import Form from './Form';

export default function Advancedsearch (props) {
   // const [display, setDisplay] = useState(props.initialState);

   return (
      <>
         <input type="checkbox" name="search" value="search" onClick={(e) => {props.changeStatus()}}/>

         <label for="search">Advanced search</label>

         {props.initialState ? <Form onChange={(newGenre, newRating)=>{props.setComponent(newGenre, newRating)}}/>: null}

      </>
   )
}