import React from 'react';
import Card from 'react-bootstrap/Card';

const ShopCard = (props) => {
    return (
        <>
            <Card style={{ width: '250px' }}>

                <div><Card.Img variant="top" src={props.imgsrc} /></div>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShopCard;