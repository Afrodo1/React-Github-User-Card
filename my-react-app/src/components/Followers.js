import React from 'react';


export default function Followers(props){
    return(
        <div>                
        <img src = {props.image} alt = {props.name}></img>
        <h4>{props.name}</h4>
        <p>Username: {props.login}</p>
      </div>
    )
}