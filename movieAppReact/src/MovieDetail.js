import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './css/movieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://localhost:7155/api/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const renderStars = () => {
    if (typeof movie.movieRate === 'number') {
      return [...Array(movie.movieRate)].map((_, index) => (
        <span key={index} className="fa fa-star checked"></span>
      ));
    }
    return null;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="container-fluid">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={movie.img} alt={movie.movieName} />
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{movie.movieName}</h3>
              <div className="rating">
                <div className="stars">
                  {renderStars()}
                </div>
              </div>
              <p className="product-description">{movie.description}</p>
              <h4 className="price">
                Category: <span>{movie.categoryName}</span>
              </h4>
              <p className="vote">
                <strong>Director: </strong> <strong>{movie.director}</strong>
              </p>
              <h5 className="sizes">
                Trailer: <a href={movie.trailer}>Watch Trailer</a>
              </h5>
              <iframe
                width="500"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="action">
                <a
                  href={`/Favorite/AddFav/${movie.movieId}`}
                  className="like btn btn-default"
                  type="button"
                >
                  <span className="fa fa-heart"></span>
                </a>
              </div>
              <br />
              <h2>Comments:</h2>
              <br />
              {movie.comments.map((item, index) => (
                <p key={index} className="vote">
                  <strong>Anonymous:</strong> <strong>{item}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
