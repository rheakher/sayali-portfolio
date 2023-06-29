import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ArticleCard from "./ArticleCard";

const Article =({articles}) => {
    return (
        <Jumbotron fluid id="projects" className="bg-light m-0">
          <Container className="">
            <h2 className="display-4 pb-5 text-center">Articles</h2>
            <Row>
              {articles.data.map((article, index) => (
                  <ArticleCard
                    key={`project-card-${index}`}
                    id={`project-card-${index}`}
                    value={article}
                  />
                ))}
            </Row>
          </Container>
        </Jumbotron>
      );
    }

export default Article;
