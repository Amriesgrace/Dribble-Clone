import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Dribbble_logo.png'
import './Nav.css';

const Nav =() =>{
    return(   
        <div className="wrapper">
            <nav className="navbar navbar-default navbar-static-top navbar-toggleable-md">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} className="width-100" alt="brand logo"/>
                        </NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="gray-text"><NavLink to="/" className="gray-text">Shots</NavLink></li>
                            <li><NavLink to="/designers" className="gray-text">Designers</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Blog</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Podcast</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Meetups</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Jobs</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Hiring</NavLink></li>
                            <li className="dropdown">
                                <NavLink to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fas fa-ellipsis-h"></span>
                                </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/">Action</NavLink></li>
                                        <li><NavLink to="/">Another action</NavLink></li>
                                        <li><NavLink to="/">Something else here</NavLink></li>
                                        <li role="separator" className="divider"></li>
                                        <li className="dropdown-header">Nav header</li>
                                        <li><NavLink to="/">Separated NavNavLink</NavLink></li>
                                        <li><NavLink to="/">One more separated NavLink</NavLink></li>
                                    </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/" className="gray-text">Sign Up</NavLink></li>
                            <li><NavLink to="/" className="gray-text">Sign In</NavLink></li>
                        </ul>
                        
                    </div>{/*nav-collapse */}
                </div>
                
            </nav>
        </div>  
    );
}

export default Nav;