import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Inline dark mode CSS */}
      <style>{`
        .dark-card {
          background-color: #1e1e1e !important;
          color: #ffffff !important;
          border: 1px solid #333;
        }

        .dark-card .btn-primary {
          background-color: #333 !important;
          border: none;
        }

        .dark-card .btn-primary:hover {
          background-color: #444 !important;
        }

        .dark-card .card-title {
          color: #ffffff !important;
        }
      `}</style>

      <Card
        className="m-2 mx-auto dark-card"
        style={{ maxWidth: "100%", width: "100%", maxWidth: "18rem" }}
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={() => navigate(`/edit?imgurl=${props.image}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MemeCard;
    
