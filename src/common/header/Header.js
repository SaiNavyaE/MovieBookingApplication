import React, {Component} from "react";
import './Header.css';
class Header extends Component{
  render(){
    return(
    <div>
      <div className="header-div">
        <img className="svg-image" src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"/>
      </div>
      <div className="upcoming-mvs-header">
        Upcoming Movies
      </div>
    </div>
    )
  }
}
export default Header;