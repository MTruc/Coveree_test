import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';

import './css/MainCard.css';


function MainCard(props) {
    let button;
    if(typeof(props.button) != 'undefined') {
        button = 
        (<p>
            <Button variant={props.button.style}>{props.button.content}</Button>
        </p>);
    }
    return (
        <Jumbotron id={props.id} className={props.className}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {button}
        </Jumbotron>
        
    )
}


export default  MainCard