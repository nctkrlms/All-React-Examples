import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://localhost:7155/api/Movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const getRandomMovies = (count) => {
    const randomMovies = [];
    const availableMovies = [...movies];

    while (randomMovies.length < count && availableMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMovies.length);
      const randomMovie = availableMovies.splice(randomIndex, 1)[0];
      randomMovies.push(randomMovie);
    }

    return randomMovies;
  };

  const handleClick = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
    console.log(`Navigating to detail page for movieId: ${movieId}`);
  };

  const renderSliderItems = () => {
    const randomMovies = getRandomMovies(3);

    return randomMovies.map(movie => ({
      src: movie.img,
      altText: movie.movieName,
      caption: movie.movieName,
      header: movie.movieName,
      key: movie.movieId
    }));
  };

  const CustomCarouselItem = ({ item }) => {
    const handleItemClick = () => {
      handleClick(item.key);
    };

    return (
      <div
        className="carousel-item"
        style={{ cursor: 'pointer' }}
        onClick={handleItemClick}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <div className="carousel-caption">
          <h5>{item.caption}</h5>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col sm="6">
          <UncontrolledCarousel
            className="rounded"
            items={renderSliderItems()}
            itemRenderer={CustomCarouselItem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
