import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';
//import OwlCarousel from 'react-owl-carousel2';


class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imgOverlay: false
        }
    }
    mouseEnter =() =>{
        this.setState({ imgOverlay: true });
    }
    mouseLeave =() =>{
        this.setState({ imgOverlay: false });
    }

    render(){
        return(
            <div>
                <div className="img-wrapper bg-grey">
                    <div className="bg-white">
                        <Link to="/" className="hover-here"
                         onMouseOver={this.mouseEnter}
                         onMouseLeave={this.mouseLeave}>
                         {this.state.imgOverlay ?
                            <div id="art-overlay" className="white-overlay">
                                <div className="overlay-header c-black">
                                    <h4>Tea Flavours</h4>
                                </div>
                                <div className="overlay-body c-black">
                                    <p className="f-12">Developing flavour profiles and color system</p>
                                </div>
                                <div className="overlay-footer c-black">
                                    <p>5th December, 2017</p>
                                </div>
                            </div> 
                        : null}
                            <img src={this.props.img} className="p-5" alt="one"/>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>            
        );
    }

}
export default UserList;