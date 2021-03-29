import React from 'react'

class AddMovie extends React.Component {
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
    this.props.addMovie(this.state.title)
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Movie:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddMovie