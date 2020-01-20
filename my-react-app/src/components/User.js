import React from 'react';


export default function User (props){
    return(
        <div className = "UserCard">
        <img src={props.image} alt = {props.name}></img>
        <h4>{props.name}</h4>
        <p>Username: {props.login}</p>
        <p>Bio: {props.bio}</p>
        <p>Location: {props.location}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>           
    </div>
    )
}