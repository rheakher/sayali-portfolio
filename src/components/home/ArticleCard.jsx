import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ArticleCard = ({ value }) => {
  const {
    title,
    publisher
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{(!publisher) ? "Hello" : publisher || <Skeleton count={3} />} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
