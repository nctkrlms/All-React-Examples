import React, { Component } from 'react'
import CustomNavBar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container, Row } from 'reactstrap'
import Mainpage from './Mainpage'


import Admin from './Admin'
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import CategoriesPage from './Categories';


export default class App extends Component {
  state = {
    currentCategory: "",
    movies: [],
    categories: [],
  }

  getCategories = () => {
    fetch("https://localhost:7155/api/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ roles: data }));
  };

  changeCat = (cat) => {
    this.setState({ currentCategory: cat.CategoryName });
    this.getUsers(cat.id);
  }
  getMovies = (movId) => {
    let url = "https://localhost:7155/api/movies/";
    if (movId) {
      url += movId
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data })

      });
  };


  componentDidMount() {
    this.getCategories();
    this.getMovies();
  }
  render() {
    return (
      <>
        <CustomNavBar />

        {/* <Routes>
          
            <Route path='mainpage' element={<Mainpage />} />
            <Route path='contact' element={<Contact movies={this.state.movies}/>} />
            <Route path='admin' element={<Admin categories={this.state.categories} />} />
            <Route path='about' element={<About changeCat={this.changeCat} categories={this.state.categories} movies={this.state.movies} currentCategory={this.state.currentCategory} />} />

        </Routes> */}

        <Routes>
          <Route path='mainpage' element={<Mainpage />} />
          <Route path='movie-detail/:id' element={<MovieDetail />} />
          <Route path='movies' element={<Movies movies={this.state.movies} />} />
          <Route path='admin' element={<Admin categories={this.state.categories} />} />
          <Route path='categories' element={<CategoriesPage changeCat={this.changeCat} categories={this.state.categories} movies={this.state.movies} currentCategory={this.state.currentCategory} />} />
        </Routes>


      </>
      // <>
      // <CustomNavBar/>
      // <Container>
      //   <Row>
      //   <About 
      //   changeRoles={this.changeRoles}
      //   roles={this.state.roles}
      //   users={this.state.users}
      //   currentRole={this.state.currentRole}/>
      //   </Row>
      // </Container>
      // <Container>
      //   <Contact roles={this.state.roles}/>
      // </Container>
      // </>
    )
  }
}
