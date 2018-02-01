import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Dribbble_logo.png'
import './Nav.css';

const Nav =() =>{
    return(   
        <div className="navbar bg-black bd-0">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="width-100" />
                </NavLink>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink  activeClassName='active' className="white-text" to="/">Shots</NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink className="white-text" exact to="/designers">
                            Designers
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/">PNavLinkge 1-1</NavLink></li>
                            <li><NavLink to="/">PNavLinkge 1-2</NavLink></li>
                            <li><NavLink to="/">PNavLinkge 1-3</NavLink></li>
                        </ul>
                    </li>
                    <li className="active">
                        <NavLink  activeClassName='active' className="gray-text" to="/">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active'  className="gray-text" exact to="/">Podcast</NavLink>
                    </li>
                    <li className="active">
                        <NavLink  activeClassName='active' className="gray-text" to="/">Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' className="gray-text" exact to="/">Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' className="gray-text" exact to="/">Hiring</NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/">
                            <i className="fas fa-ellipsis-h gray-text f-20"></i>
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/">PNavLinkge 1-1</NavLink></li>
                            <li><NavLink to="/">PNavLinkge 1-2</NavLink></li>
                            <li><NavLink to="/">PNavLinkge 1-3</NavLink></li>
                        </ul>
                    </li>
                    
                </ul>   
            </div>
        </div>   
    );
}

export default Nav;