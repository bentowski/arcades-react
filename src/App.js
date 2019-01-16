import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

class App extends Component {
  state = {
    printing : "Up"
  }
  SignUp = () => {
    this.setState({printing : "Up"})
  };

  SignIn = () => {
    this.setState({printing : "In"})
  };

  clear = () =>{
      this.setState({printing : null})
  }

  win = () => {
    this.setState({printing : "win"})
  }

  render() {
    let printer = null
    let printing = this.state.printing

      switch (printing) {
        case "Up":
          printer = (
            <SignUp click={() => this.win()} />
          )
          break;
        case "In":
          printer = (
            <SignIn click={() => this.clear()} />
          )
          break;
        case "win":
          printer = (
            <h1>WIN !!</h1>
          )
          break;
          default:
          console.log("error");
      }
    return (
      <div className="App">
        <h1>Pong</h1>
        <button onClick={this.SignUp}>Sign Up</button>
        <button onClick={this.SignIn}>Sign In</button>
        {printer}
      </div>
    );
  }
}

export default App;
