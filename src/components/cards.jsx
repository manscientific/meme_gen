import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (props)=>{
    const navigate = useNavigate();
    return (
         <Card className="m-2 mx-auto" style={{ maxWidth: '100%', width: '100%', maxWidth: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button onClick={() => navigate(`/edit?imgurl=${props.image}`)}
         variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    )
    }
export default MemeCard;
  



    
