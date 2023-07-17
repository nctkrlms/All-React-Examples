import React, { useEffect, useState } from 'react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://localhost:7155/api/Categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container">
      <h1>Categories</h1>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.categoryId} className="category-item">
            <a href={`/category/${category.categoryId}`}>
              {category.categoryName}
            </a>
            <ul className="movie-list">
              {category.movies.map(movie => (
                <li key={movie.movieId} className="movie-item">
                  <h3>{movie.movieName}</h3>
                  <img src={movie.img} alt={movie.movieName} />
                  <p>{movie.description}</p>
                  <p>Director: {movie.director}</p>
                  <p>Rating: {movie.movieRate}</p>
                  <a href={movie.trailer}>Watch Trailer</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
