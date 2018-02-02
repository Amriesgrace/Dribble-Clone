import React from 'react';
import {  Link } from 'react-router-dom';
import './Nav.css';
import './List.css';
import User from './User';


const List =(props) =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <Link to="/">
                                        <img src={props.img} className="img-circle width-130" alt="user" />
                                    </Link>
                                    
                                </div>
                                <div className="col-md-8">
                                    <h5 className="fw-bold"> <strong><Link to="/">{props.name}</Link></strong></h5>
                                    <p>Poland <br/> 
                                        One of Europe fastest growing design and software consulting agencies.
                                         We're accepting new projects - drop us a lin...
                                    </p>
                                    <div>
                                        <button className="btn m-5" title="Follow first1"><i className="fas fa-plus" ></i></button>
                                        <button className="btn btn-success m-5" 
                                        title="Send a message abut work opportunity">
                                            <i className="fas fa-envelope" title="Send a message about a work opportunity"></i>
                                        </button>
                                        <Link to="" className="dark-graytext text-none">
                                            <strong className="black-text">{props.follow} </strong>
                                            <strong> &nbsp;followers</strong> 
                                        </Link>
                                        <p>ux, ui, product design, mobile design, web design, graphic design,
                                             branding, ios design, interaction design</p>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                           
                            
                        </div>
                        <div className="col-md-8">
                            <div className="info">
                                <div className="user-gallery">
                                   <User post = { props.post }/>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr"/>
                </div>
            </div>
        </div>
    );
    
}

export default List;