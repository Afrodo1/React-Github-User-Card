import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users:{},
      followers:[],
      followerInfo:[]      
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Afrodo1')
      .then(user => {
        console.log('fetch: user: ', user.data);
        this.setState({...this.state.users, users: user.data});                 
      })
      .catch(err => console.log('error on fetch:', err));

    axios.get('https://api.github.com/users/Afrodo1/followers')
      .then(follower => {
        console.log(follower.data);
        this.setState({...this.state.followers, followers : follower.data})
      })
      .catch(err => console.log('error on fetch:', err));
  }  
  
  render(){
    return( 
      <div className = "App">
        <h1>UserCard</h1>
        <User
        image = {this.state.users.avatar_url}
        name = {this.state.users.name}
        login = {this.state.users.login}
        bio = {this.state.users.bio}
        location = {this.state.users.location}
        followers = {this.state.users.followers}
        following = {this.state.users.following}/>

        
        <h1>Followers</h1>
          {this.state.followers.map(follower =>{
            return(
              <Followers
              
              image = {follower.avatar_url}
              name = {follower.name}
              login = {follower.login}/>
            )
          })}
        

      </div>
    )
  }

}







