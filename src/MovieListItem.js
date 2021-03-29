import React from 'react'
import InfoPanel from './InfoPanel.js'

var MovieListItem = props => {
  if (props.movie.display) {
    return (
      <div>
      <p className="movieName" onClick={() => props.showInfo(props.movie.title)}>{props.movie.title}</p>
      <InfoPanel watchToggle={props.watchToggle} movie={props.movie}/>
      </div>
    )

  } else {
    return (
      <div>
        <p className="movieName" onClick={() => props.showInfo(props.movie.title)}>{props.movie.title}</p>
        </div>
    )
  }
}

export default MovieListItem;
