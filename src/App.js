import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import {NavLink } from 'react-router-dom'
import Routing from './routes/index'

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBI23JCJTPSJGZdS6tdcW3_QX-YccjtuyY",
  authDomain: "software-development-240-320.firebaseapp.com",
  databaseURL: "https://software-development-240-320.firebaseio.com",
  projectId: "software-development-240-320",
  storageBucket: "software-development-240-320.appspot.com",
  messagingSenderId: "17741822311"
};
firebase.initializeApp(config);

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {user:null}
  } 
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div><img src={`${user.photoURL}`} />{user ? `Hi, ${user.displayName}` : 'Hi!'}</div>)
  }
  render() {
    return (
      <div className="my-app">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/Game" activeClassName="is-active" className="navbar-item">Game</NavLink>
                <NavLink to="/Contact" activeClassName="is-active" className="navbar-item">Contact</NavLink>
                &nbsp;
                {this.renderName()}
                &nbsp;
          <button class="fb-signin-button" onClick={this.login}>
            Login with Facebook
          </button>
          &nbsp;
          <button class="fb-signin-button" onClick={this.logout}>
            Logout
          </button>
              </div>
            </div>
          </div>
        </nav>

        <Routing />
      </div>
    );
  }
}

export default App;
