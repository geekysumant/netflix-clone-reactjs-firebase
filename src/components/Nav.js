import React, { Component } from "react";
import "./nav.css";

export class Nav extends Component {
    constructor(){
        super();
        this.state={
            showNavBlack: false
        }
    }
  componentDidMount() {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            this.setState({
                showNavBlack: true
            });
        }else {
            this.setState({
                showNavBlack: false
            });
        }
      });
  }
  render() {
    return (
      <div className={`nav ${this.state.showNavBlack && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <div className="avatar_details">
            <img
            className="nav_avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
            />
            <small className="avatar_name">Sumant K.</small>
        </div>
      </div>
    );
  }
}

export default Nav;
