import React, { useState } from 'react';

export default function Button1 (props) {


   return (
      <button class="btn btn-light" onClick={props.getClean}>Reset</button>

   )
}