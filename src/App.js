import React, { Component } from "react";

import Table from "./Table";
import Form from "./Form";
class App extends Component {
  state = {
    characters: []
  };

  removeCharcter = index => {
    console.log(index);
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = e => {
    this.setState({
      characters: [...this.state.characters, e]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>User Data</h1>
        <Form handleSubmit={this.handleSubmit} />
        <Table
          charctersData={this.state.characters}
          removeCharcter={this.removeCharcter}
        />
      </div>
    );
  }
}

export default App;
