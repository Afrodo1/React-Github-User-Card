import React from 'react';
import styled from 'styled-components';

let UserCards = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
    margin-bottom: 2%;
    background-color: #e3dfc9;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    img{
        width: 50%;
        border: 1px solid black;
    }
    
`;

export default function User (props){
    return(
        <UserCards className = "UserCard">
            <img src={props.image} alt = {props.name}></img>
            <h4>{props.name}</h4>
            <p>Username: {props.login}</p>
            <p>Bio: {props.bio}</p>
            <p>Location: {props.location}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>      
        </UserCards>
    )
}