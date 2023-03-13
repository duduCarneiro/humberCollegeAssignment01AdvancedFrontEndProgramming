import React, { useState } from 'react';
import './Form.css';

function Form(props) {
const [name, setName] = useState("");
const [vote, setVote] = useState("");
const [filter, setFilter] = useState(true);


function myHandler(e) {
   e.preventDefault();
   props.onChange(name, vote);
   setFilter(false);
}

return (
   <form onSubmit={myHandler}>
      <input type="submit" class="btn btn-info" value="Apply the filter"  />
      <p>Select the genre: {name}</p>
      <input type="radio" id="Drama" name="fav_genre" value="drama" onChange={(e) => setName(e.target.value)}/>
      <label for="Drama">Drama</label>
      <input type="radio" id="Adventure" name="fav_genre" value="adventure" onChange={(e) => setName(e.target.value)}/>
      <label for="Adventure">Adventure</label>
      <input type="radio" id="Action" name="fav_genre" value="action" onChange={(e) => setName(e.target.value)}/>
      <label for="Action">Action</label>
      <input type="radio" id="Fantasy" name="fav_genre" value="fantasy" onChange={(e) => setName(e.target.value)}/>
      <label for="Fantasy">Fantasy</label>
      <input type="radio" id="Sci-Fi" name="fav_genre" value="sci-Fi" onChange={(e) => setName(e.target.value)}/>
      <label for="Sci-Fi">Sci-Fi</label>

      <br /> <br />
      <p>Choose the minimum rating level: {vote}</p>
      <label for="vote">Rating (between 0 and 10):</label>
      <input type="range" id="vote" name="vote" min="0" max="10" onChange={(e) => setVote(e.target.value)}/>
      <br /> <br />


   </form>
);
}

export default Form;