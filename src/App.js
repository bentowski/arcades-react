import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Game from './components/game'
import Connexion from './Data/connexion.json'

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

  verif = () => {
    const clientListJ = localStorage.getItem("./Data/connexion")
    const clientList = JSON.parse(clientListJ)
    console.log(clientList);
  }




  render() {
    let printer = null
    let printing = this.state.printing

      switch (printing) {


        case "Up": //Formulaire d'inscription
        printer = (
          <div>
            <h1>Register</h1>
            <button onClick={this.SignUp}>Sign Up</button>
            <button onClick={this.SignIn}>Sign In</button>
            <SignUp click={() => this.registered()} /> {/*renvoi vers la confirmation d'inscription*/}
              {/* TODO: verifier formlulaire et enregistrer dans Json*/}
          </div>
        )
        break; //fin formulaire inscription


        case "registered": //Confirmation adresse mail
        printer = (
          <div>
            <h1>registered</h1>
            <button onClick={this.game}>continue</button> {/*renvoi vers le jeu // TODO: verification mail*/}
          </div>
        )
        break; // fin confirmation adresse mail


        case "In": //Formulaire de connexion
        printer = (
          <div>
            <h1>Register</h1>
            <button onClick={this.SignUp}>Sign Up</button>
            <button onClick={this.SignIn}>Sign In</button>
            <SignIn click={() => this.check()} />
          </div>
        )
        break; // fin formulaire de connexion


        case "check": //verifie le formulaire de connexion  // TODO: effectuer la verification avec fichier Json au lieu de ci-dessous
        printer = (
          <div>
            <p>En attente</p>
          </div>
        )
        break; // fin du check


        case "game": //Jeu
          printer =(
            <div>
              <Game />
            </div>
          )
          break; // fin de jeu


          default: //Page d'accueil "printing=null"
          printer = (
            <div>
              <h1>Welcome</h1>
              <button onClick={this.SignUp}>Sign Up</button>
              <button onClick={this.SignIn}>Sign In</button>
            </div>
          ) // fin page d'accueil


      } //Fin du switch


// Envoi du résultat
    return (
      <div className="App">
        {printer} {/*affichage adaptatif*/}
        <div><p>affichage du json</p></div>
        <button onClick={this.verif}>TEST</button>
      </div>
    ); // fin de return
  } // fin de render
} // fin de App

export default App;
