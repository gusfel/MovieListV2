import React from 'react'
import MovieList from './MovieList.js'
import Search from './Search.js'
import AddMovie from './AddMovie.js'
import axios from 'axios'
import key from '../apikey.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      display: null
    }
    this.addMovie = this.addMovie.bind(this)
    this.findMovie = this.findMovie.bind(this)
    this.watchToggle = this.watchToggle.bind(this)
    this.watchedOnly = this.watchedOnly.bind(this)
    this.toWatchOnly = this.toWatchOnly.bind(this)
    this.showInfo = this.showInfo.bind(this)
  }

  componentDidMount() {
    axios.get('/movies')
      .then(response => {
        console.log(response.data)
        response.data.forEach(movie => {
            this.addMovie(movie.title)
          })
      })
  }

  watchToggle(movieClicked) {
    var current = this.state.movies;
    current.forEach(movie => {
      if (movie.title === movieClicked) {
        movie.watched = !movie.watched
      }
    })
    this.setState({
      movies: current
    })

  }

  addMovie(movie) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&include_adult=false`)
    .then(response => {
      movie = response.data.results[0]
      movie.display = false
      movie.watched = false
      movie.showInfo = false
      return movie
    })
    .then(movie => {
      this.setState({
        movies: [...this.state.movies, movie]
      })
    })
  }

  findMovie(text) {
    var current = [];
    var notFound = true;
    this.state.movies.forEach(movie => {
      if (movie.title.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        notFound = false;
        current.push(movie);
      }
    })
    if (notFound) {
      alert('Try again!')
    } else {
      this.setState({
        movies: current
      })
    }
  }

  watchedOnly() {
    if (this.state.display !== 'watched') {
      this.setState({
        display: 'watched'
      })
    } else {
      this.setState({
        display: null
      })
    }
  }

  toWatchOnly() {
    if (this.state.display !== 'toWatch') {
      this.setState({
        display: 'toWatch'
      })
    } else {
      this.setState({
        display: null
      })
    }
  }

  showInfo(movieClicked) {
    var current = this.state.movies
    current.forEach(movie => {
      if (movie.title === movieClicked) {
        movie.display = !movie.display
      }
    })
    this.setState({
      movies: current
    })
    console.log(this.state.movies)
  }

  render() {
    return (
    <div>
      <h1>Movie List</h1>
      <AddMovie addMovie={this.addMovie} />
      <div>
        <button onClick={this.watchedOnly}>Watched</button>
        <button onClick={this.toWatchOnly}>To Watched</button>
        <Search findMovie={this.findMovie}/>
      </div>
      <MovieList showInfo={this.showInfo} watchToggle={this.watchToggle} display={this.state.display} movies={this.state.movies} />
    </div>
    )
  }
}

export default App