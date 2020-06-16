import React from 'react';

import Card from 'react-bootstrap/Card';

import './css/ImageCard.css';

function ImageCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ImageCard