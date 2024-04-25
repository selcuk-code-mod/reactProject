import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CardProd/card.css";

function CardProps(props) {
  return (
    <React.Fragment>
      <div className="container">
        <Card className="text-center border-0 row justify-content-center align-items-center">
          <Card.Header className=" col border-0 rounded-3">
            <div className="text-primary  fs-1 text-center icon">
              {props.icon}
            </div>
            <Card.Title className="fs-3 fw-bold pt-5">{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <br />
            <br />
            <br />
          </Card.Header>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default CardProps;
