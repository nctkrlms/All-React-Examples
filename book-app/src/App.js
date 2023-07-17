import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';
import * as userActions from './redux/actions/userActions';
import Books from './components/books/Books';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/category/BookList';




function App() {

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [])
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/books' element={<Books/>}/>
      {/* <Route path='/details' element={<BooksDetail/>}/> */}
      <Route path='/category/:categoryId' element={<BookList/>}/>
      </Routes>      
    </>

  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.loginUserReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.loginUser, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);





