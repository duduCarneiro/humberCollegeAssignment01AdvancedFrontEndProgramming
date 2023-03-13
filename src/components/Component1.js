import React, { useState } from 'react';
import Card1 from './Card1';
import Advancedsearch from './Advancedsearch';
import Button1 from './Button1';
import Favorite from './Favorite';
import Component2 from './Component2';
import '../App.css';

// import '../App.css';



export default function Component1(props) {
   const [movie, setMovie] = useState("");
   const [genreChosen, setGenreChosen] = useState("");
   const [ratingChosen, setRatingChosen] = useState(0);
   const [initialState, setInitialState] = useState(false);
   const [favorite, setFavorite] = useState(false);
   const [list, setList] = useState("");


   const randomMovie= function(data) {
      // data length = 16
      let randomIndex = 0;
      let position = -1;
      let film;
      console.log(genreChosen);
      
      do {
         randomIndex = parseInt(Math.random() * 16)
         film = data[randomIndex];
         position = film.Genre.toLowerCase().search(genreChosen);
         console.log(genreChosen);
         console.log("rating chosen" + ratingChosen);
         console.log("imdb film" + parseFloat(film.imdbRating));
         
      } while (position === -1 || parseInt(film.imdbRating) < ratingChosen || props.type !== film.Type);
      

      console.log(genreChosen);
      setFavorite(false)
      setMovie(data[randomIndex]);
   }





   const getMoviesInfo = function () {
      fetch(`https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON`)
      .then(response => {
         return response.json();
      })
      .then(data => {
         randomMovie(data)
      })
   }

   const cleanFields = function () {
      setMovie("");
      setGenreChosen("");
      setRatingChosen(0);
      console.log(initialState);
      setInitialState(false);
      console.log(initialState);
      setList("");
      window.location.reload();

   }

   const addFavorit = function (fav) {
      if (favorite) {
         setFavorite(false);
      } else {
         setFavorite(true);
         setList(list + "\n\n" + " • "+ fav);
      }
   }

   return (
      <div  className="Component">
         <h1>Wanna a sugestion of {props.type} to watch?</h1>


        {<button style={{margin:"10px"}} type="button" class="btn btn-primary" onClick={getMoviesInfo}>{genreChosen || ratingChosen ? "Custom search" : "Click here"}</button>}
         {/* <div>{props.children}</div> */}

         <Advancedsearch initialState={initialState} setComponent={(genre, rating)=>{setGenreChosen(genre); setRatingChosen(parseInt(rating))}} changeStatus={()=>{initialState ? setInitialState(false) : setInitialState(true)}}/>

         <Button1 getClean={()=>{cleanFields()}}/>

         <div className='Cards'>
         {movie ? <Card1 title ={movie.Title}>
            <div style={{textAlign: "left"}}>
            <p>Rating: {movie.imdbRating}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Runtime: {movie.Runtime}</p>
            {/* <p>Cast: {movie.Actors}</p> */}
            <p>Awards: {movie.Awards}</p>
            <p>Released: {movie.Released}</p>
            </div>
            <img style={{width: "300px"}} src={movie.Images[0]} alt="Poster"/>

            <Favorite selected={favorite} getFav={()=>{addFavorit(movie.Title)}} />
            </Card1> : null}
         </div>
         <Component2 list={list}/>
     </div>
   );
 }

