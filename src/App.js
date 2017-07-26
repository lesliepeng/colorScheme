import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], baseHEX: ''};
  }

  handleChange(e) {
    this.setState({baseHEX: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      baseHEX: this.state.baseHEX,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      baseHEX: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>COLORS</h3>
        <ColorList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.baseHEX} />
          <button>{'Add Color #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

export default App;
