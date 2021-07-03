import React from 'react';
import '../css/base.css';
// Logos
import soham from '../img/5-soham.png';
import sanskriti from '../img/2-sanskriti.png';
import moc from '../img/MOC Final LOGO (1).png';
import ngma from '../img/4-NGMA - 1.png';
import user from '../img/user-1.jpg';


class NavBar extends React.Component{
    render(){
        return(
            <>
            <div className="header">
                <div className="header_div">
                    <img className="header_img header_img-1" src={soham} alt="so-ham logo" />
                    <img className="header_img header_img-2" src={sanskriti} alt="" />
                    <img className="header_img header_img-3" src={moc} alt="MOC logo" />
                    <img className="header_img header_img-4" src={ngma} alt="NGMA logo" />
                </div>
                <div className="header_div">
                    <h1 className="header_heading">So'Ham</h1>
                </div>
                <div className="header_div header_div-btn">
                    <div className="header_div-userImg"><img src={user}alt="User_img" /></div>
                    <span className="header_div-submit">Submit</span>
                </div>
            </div>

            <div className="navigation" id="navBar">
                <div className="nav">
                    <a className="nav_link nav_active" href="#">Home</a>
                    <i className="fa fa-bars nav_icon" aria-hidden="true"></i>
                    <a className="nav_link" href="./theme.html">Theme of the month</a>
                    <a className="nav_link" href="./blog.html">Blog</a>
                    <a className="nav_link" href="./museumCorner.html">Museum's Corner</a>
                    <a className="nav_link" href="./about.html">About us</a>
                    <a className="nav_link" href="./contact.html">Contact us</a>
                    <div className="nav_dropdown">
                        <button className="nav_dropbtn nav_link">More
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="nav_dropdown-content">
                            <a href="./events.html">Events</a>
                            <a href="./exhibitions.html">Exhibitions</a>
                            <a href="./livestream.html">Live Streams</a>
                        </div>
                    </div>
                </div>
            </div>
        </ >
        )
    }
}

export default NavBar;