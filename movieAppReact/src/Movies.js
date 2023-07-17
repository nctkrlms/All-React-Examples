import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Movies = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    // Movie Detail sayfasına yönlendirme yapma
    navigate(`/movie-detail/${movieId}`);
  };

  return (
    <>
      <Container>
        <Row>
          {movies.map((a) => (
            <Card style={{ width: '18rem' }}>
              <img alt="Sample" src={a.img} />
              <CardBody>
                <CardTitle tag="h5">{a.movieName}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{a.director}</CardSubtitle>
                <CardText>{a.description}</CardText>
                <Button onClick={() => handleMovieClick(a.movieId)}>Movie Detail</Button>
              </CardBody>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Movies;
