/* 
 * Description: React navbar component
 *
 * Project: Fleet
 * Group Members: Jordan Collins, Tristan Newmann, Hayden Cheers, Alistair Woodcock
 * Last modified: 11 October 2016
 * Last Author: Alistair Woodcock
 * 
 */ 

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import logo from '../images/UoNHorse.png';

export default class NavBar extends Component{
  static PropTypes = {
    navTitle: PropTypes.string
  }

  render(){
    var { navTitle, loggedIn, signOutClick } = this.props;

    var signOut = null;

    if(loggedIn) {
      signOut = <div className="logout" onClick={signOutClick}>Sign out</div>
    }

    return(
      <div id="nav">
        <div className="sidebar-top">
          <Link to="/">
          <div className="logo"><img role="presentation" src={logo} /> <div className="home-button">Home</div></div>
          </Link>
        </div>

        <div className="dashboard-top">
          
          <div className="room-name">{ navTitle }</div>
          {signOut}
        </div>

      </div>
    );
  }
}
