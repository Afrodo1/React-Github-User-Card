import React from 'react';
import styled from 'styled-components';

let UserCards = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
    margin-bottom: 5%;
    background-color: #e3dfc9;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    img{
        width: 50%;
        border: 1px solid black;
    }
    
`;


export default function Followers(props){
    return(
        <UserCards className = "FollowerCard">                
        <img src = {props.image} alt = {props.name}></img>
        <h4>{props.name}</h4>
        <p>Username: {props.login}</p>
      </UserCards>
    )
}