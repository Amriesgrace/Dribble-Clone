import React from 'react';
import { NavLink } from 'react-router-dom';
import { button} from 'react-bootstrap';
import './Nav.css';

const SecondaryNav =() =>{
    return (
        <div>
            <div className="jumbotron bg-dark-black mte-22">
                <h3 className="gray-text text-center"> 
                    <strong className="white-text">What are you working on?</strong>
                    &nbsp; &nbsp;
                    Dribble is where designers get inspired and hired 
                </h3> 
                <div className="white-text text-center">
                    <button className="btn btn-md bg-pink width-150 mt-20 fw-md">Continue &nbsp;
                        <i className="fas fa-long-arrow-alt-right white-text"></i>
                    </button>
                </div>
                
            </div>
            <div className="well bg-black mte-30 bd-0 bd-black">
                <h4 className="gray-text text-center">Looking to hire a designer? 
                    <NavLink to="/" className="white-text">&nbsp;Learn More</NavLink>
                </h4>
            </div>
        </div>
    );
    

}

export default SecondaryNav;