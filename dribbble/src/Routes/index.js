import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Component/Home';
import Designers from '../Component/Designers';
export default() =>(
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/designers" exact component={ Designers } />
            </div>
            
        </BrowserRouter>
    
);