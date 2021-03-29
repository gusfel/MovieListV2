import React from 'react'
import MovieListItem from './MovieListItem.js'

var MovieList = props => {
  var useTheseMovies = [];
  if (props.display === 'watched') {
    props.movies.forEach(movie => {
      if (movie.watched) {
        useTheseMovies.push(movie);
      }
    })
  } else if (props.display === 'toWatch') {
    props.movies.forEach(movie => {
      if (!movie.watched) {
        useTheseMovies.push(movie);
      }
    })
  } else {
    useTheseMovies = props.movies
  }
  return (

    <div>
      {useTheseMovies.map((movie, index) =>
      <MovieListItem showInfo={props.showInfo} watchToggle={props.watchToggle} movie={movie} key={index}/>)}
    </div>

  )

}

export default MovieList


 // if (props.display === 'watched') {
  //   return (
  //     <div>
  //       <ul>
  //         {props.movies.map((movie, index) => {
  //           if (movie.watched ) {
  //             return(
  //               <MovieListItem showInfo={props.showInfo} watchToggle={props.watchToggle} movie={movie} key={index} />
  //             )
  //           }
  //         }
  //         )}
  //       </ul>
  //     </div>
  //   )
  // } else if (props.display === 'toWatch') {
  //   return (
  //     <div>
  //       <ul>
  //         {props.movies.map((movie, index) => {
  //           if (!movie.watched) {
  //             return(
  //               <MovieListItem showInfo={props.showInfo} watchToggle={props.watchToggle} movie={movie} key={index} />
  //             )
  //           }
  //         }
  //         )}
  //       </ul>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <ul>
  //         {props.movies.map((movie, index) =>
  //         <MovieListItem showInfo={props.showInfo} watchToggle={props.watchToggle} movie={movie} key={index}/>)}
  //       </ul>
  //     </div>
  //   )
  // }

