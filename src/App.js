import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Game from './components/game'

class App extends Component {
  state = {
    printing : null
  }

  //changement de la variable "printing" pour choisir l'affichage

  SignUp = () => {
    this.setState({printing : "Up"})
  };

  registered = () => {
    this.setState({printing : "registered"})
  }

  SignIn = () => {
    this.setState({printing : "In"})
  };

  check = () => {
    this.setState({printing : "check"})
  }

  game = () => {
    this.setState({printing : "game"})
  }

  clear = () => {
      this.setState({printing : null})
  }



  render() {
    let printer = null
    let printing = this.state.printing

      switch (printing) {
        case "Up": //affichage du formulaire d'inscription (mène à la page "registered")
        printer = (
          <div>
            <h1>Register</h1>
            <button onClick={this.SignUp}>Sign Up</button>
            <button onClick={this.SignIn}>Sign In</button>
            <SignUp click={() => this.registered()} /> {/*renvoi vers la confirmation d'inscription*/}
              {/* TODO: verifier formlulaire et enregistrer dans Json*/}
          </div>
        )
        break;
        case "registered": //affichage de la confirmation d'inscription
        printer = (
          <div>
            <h1>registered</h1>
            <button onClick={this.game}>continue</button> {/*renvoi vers le jeu // TODO: verification mail*/}
          </div>
        )
        break;
        case "In": //affichage du formulaire de connexion (qui mène à la page de jeu)
        printer = (
          <div>
            <h1>Register</h1>
            <button onClick={this.SignUp}>Sign Up</button>
            <button onClick={this.SignIn}>Sign In</button>
            <SignIn click={() => this.check()} />
          </div>
        )
        break;
        case "check": //verifie le formulaire de connexion  // TODO: effectuer la verification avec fichier Json au lieu de ci-dessous
        let user=[
          {username:"jean", password:"123"},
          {username:"jeanne", password:"456"},
          {username:"michael", password:"789"},
          {username:"george", password:"987"}
        ]

        let envoi = () => {
          let questionUser=document.getElementById("username").value
          , questionPassword=document.getElementById("password").value
          for(let i=0; i<user.length; i++){
            if(questionUser===user[i].username && questionPassword===user[i].password){
              this.game()
            }
          }
        }
        envoi ()
        break;
        case "game": //affichage du jeu (c'est là qu'il y a un soucis)
          printer =(
            <div>
              <Game />
            </div>
          )
          break;
          default: //affiche la page d'accueil lorsque "printing" vaut "null" (initial)
          printer = (
            <div>
              <h1>Welcome</h1>
              <button onClick={this.SignUp}>Sign Up</button>
              <button onClick={this.SignIn}>Sign In</button>
            </div>
          )
      }
    return (
      <div className="App">
        {printer} {/*affichage adaptatif*/}
      </div>
    );
  }
}

export default App;
