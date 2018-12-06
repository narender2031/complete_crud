import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      email: "",
      phone: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
