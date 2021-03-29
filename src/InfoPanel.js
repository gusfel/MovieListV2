import React from 'react'

var InfoPanel = props => {
  return (
    <div>
      <p>Year: {props.movie.release_date.slice(0, 4)}</p>
      <p>MetaScore: {props.movie.vote_average}</p>
      <button className="toWatch" onClick={() => {props.watchToggle(props.movie.title)}}>{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  )
}


export default InfoPanel