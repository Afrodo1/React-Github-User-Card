import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
    axios.get('https://api.github.com/users/Afrodo1/followers')
      .then(follower => {
        console.log(follower.data.login);
        this.setState({...this.state.followerInfo, followerInfo : follower.data.login})
      })
      .catch(err => console.log('error on fetch:', err));


  }  
  
  render(){
    return( 
      <div className = "App">
        <h1>Hello World</h1>
        <div className = "UserCard">
            <img src={this.state.users.avatar_url} alt = {this.state.users.name}></img>
            <h4>{this.state.users.name}</h4>
            <p>Username: {this.state.users.login}</p>
            <p>Bio: {this.state.users.bio}</p>
            <p>Location: {this.state.users.location}</p>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>           
        </div>
        <section className = 'FollowerCard'>
        <h1>Followers</h1>
          {this.state.followers.map(follower =>{
            return(
              <div>                
                <img src = {follower.avatar_url} alt = {follower.name}></img>
                <h4>{follower.name}</h4>
                <p>Username: {follower.login}</p>
              </div>
            );
          })}
        </section>

      </div>
    )
  }

}







