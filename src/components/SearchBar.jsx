import React, { Component } from 'react';


export default class SearchBar extends Component {
  state = { search: 'batman' }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchState(this.state.search);
  }

  render() {
    return (
      <div>
        <form className="form-input" onSubmit={this.handleSubmit}>
          <label htmlFor="">Search For A Video</label>
          <input type="text" name="input" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
