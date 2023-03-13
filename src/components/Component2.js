import React, { useState } from 'react';

export default function Component2(props) {

   return (
      <div  className="Comp2">
         <h4>My list</h4>
         <p>{props.list}</p>

      </div>
   );
}