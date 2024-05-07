import React from "react";
import { Button, Card } from "react-bootstrap";

const NotFound = ({ image, text, onClick }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="text-center p-4 shadow col-8">
        <Card.Body>
          <Card.Title>Not Found</Card.Title>
          <Card.Text>{text}</Card.Text>

          <Button
            variant="primary"
            onClick={onClick}
            className="mt-3"
            style={{ color: "white" }}
          >
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
