import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookAction";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"


// class  extends  {
  
//   componentDidMount() {
//     this.props.actions.getBooks();
//     this.props.actions.getCategories();
//   }
  
  

  // getId()
  // {
  //   [selected,setSelected] = useState();
  //   useEffect(())
  //   this.props.books((book)=>(
      
  //   ))
  // }

  
    function BookList({
      books,
      categories,
      getBooks,
      getCategories,
      ...props
    }) {
      const [book, setBook] = useState({ ...props.book });
      const [errors, setErrors] = useState({});
      useEffect(() => {
        if (categories.length === 0) {
          getCategories();
        }
        setBook({ ...props.book });
      }, [props.book]);
      
    
    
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .bcontent {
            margin-top: 10px;
        }
        .card {
            width: 400px;
            margin-bottom: 10px;
        }
        `,
          }}
        />
        <div className="container bcontent">
          <div className="row">
            {this.props.categories.map((category)=>(
              <div>
                <h2>
                  {this.props.book}
                </h2>
                <h2>
                  {category.name}
                </h2>
                {/* {this.props.books.map((book) => (let cat = filter(book.categoryId===category.id)))} */}
              </div>
            ))}
            {this.props.books.map((book) => (
            <div className="col-sm-4">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-sm-5">
                    <img className="card-img" src={book.src} alt="Suresh Dasari Card" />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">
                        {book.summary.substring(0,100)} ...
                      </p>
                      <a href="#" className="btn btn-primary">
                        Detay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </>
    );
  }



export function getBookById(books, bookId) {
  let book = books.find((book) => book.id === bookId) || null;
  return book;
}
  function mapStateToProps(state, ownProps) {
    const bookId = ownProps.match.params.categoryId;
    const book =
      bookId && state.productListReducer.length > 0
        ? getBookById(state.bookReducer, bookId)
        : {};
  return {
    book,
    categories: state.categoryReducer,
    books: state.bookReducer,
  };
}


const mapDispatchToProps={
  getCategories: categoryActions.getCategories,
  getBooks: bookActions.getBooks,

} 

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


