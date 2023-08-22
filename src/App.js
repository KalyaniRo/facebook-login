import React, { Component } from 'react';

import './App.css';


class App extends Component {
  render() {
    return (
      <div class="container">

        <h1>Facebook</h1>
        <p>Facebook help you connect and share <br /> with the pepople in your life </p>

        <div className='box'>
          <input type='email' name='email' id='email' placeholder='Email or Phone number'></input><br />
          <input type='password' name='password' id='password' placeholder='Password'></input>

          <div class="link">

            <a href='#'>Log In</a>

          </div>

          <div class="link1">
            <a href='#'>Forgotten password</a>

          </div>
          <div class="link2">
            <a href='#'>Create New Account</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
