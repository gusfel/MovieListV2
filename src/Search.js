import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findMovie(this.state.title)
    this.setState({
      title: ''
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Find Movie:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search