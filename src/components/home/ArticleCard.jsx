import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Button from 'react-bootstrap/Button';


const ArticleCard = ({ value }) => {
  const {
    title,
    publisher,
    link
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h6">{title || <Skeleton />} </Card.Title>
          <Button variant="dark" href={link}>{publisher}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
