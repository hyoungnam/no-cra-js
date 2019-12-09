import React, { Component } from 'react';

class Login extends Component {
  state = {
    text: 'Hello, React',
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <div>single page application</div>
      </div>
    )
  }
}
export const hello = 'hello'; //import {hello}
export default Login; //import NumberBaseball