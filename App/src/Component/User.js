import React from 'react';
import axios from 'axios';
import UserList from './UserList';
import OwlCarousel from 'react-owl-carousel2';
import PropTypes from 'prop-types';
import './List.css';
import hold from '../images/hold.jpeg';
import art from '../images/art.jpeg';
import bat from '../images/bat.jpg';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lists: []   
        }
    }
   
    componentDidMount() {
        console.log(this.props.post);
        if(this.props.post){

            let _id = this.props.post.id;
            axios.get(`https://5a422991e1542700129be910.mockapi.io/imagecard/users/${_id}/images`)
                .then( response => {
                    const lists = response.data;
                    const updatedLists = lists.map(list =>{
                        return{
                            ...list, 
                            author: 'Max'
                        }
                    }) 
                    this.setState({lists: updatedLists});
                    
                    //console.log(response);
            });  
        }
        else{
            return;
        }
    }
   
    
    
    render(){
       // console.log(this.props);
        const lists = this.state.lists.map(list => {
            return <UserList 
            key={list.id} 
            name={list.name}
            img={list.imageUrl}
            />;
        });

        const options = {
            items: 3,
            nav: true,
            rewind: true,
            autoplay: true
        };
         
        return(
            <div>
                <div className="container-fluid">
                    <OwlCarousel options={options}>
                        { lists }
                        
                        <img src={hold} className="h-200 p-5 mt-5 bg-white" alt="hold"/>
                        <img src={art} className="h-200 p-5 mt-5 bg-white" alt="art"/>
                        <img src={bat} className="h-200 p-5 mt-5 bg-white" alt="bat"/>
                        <img src={hold} className="h-200 p-5 mt-5 bg-white" alt="hold"/>
                        <img src={art} className="h-200 p-5 mt-5 bg-white" alt="art"/>
                        <img src={bat} className="h-200 p-5 mt-5 bg-white" alt="bat"/>
                    </OwlCarousel>
                </div>
                
            </div>
        );
    }
}
User.propTypes = {
    posts: PropTypes.object
  };
export default User;