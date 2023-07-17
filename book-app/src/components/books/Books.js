import React, { Component } from 'react'
import "./books.css"
import { Container } from 'reactstrap'
export default class Books extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="card" style={{ maxWidth: '500px' }}>
                        <div className="row g-0">
                            <div className="col-sm-5">
                                <img src="images/sample.svg" className="card-img-top h-100" alt="..." />
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Alice Liddel</h5>
                                    <p className="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                    <a href="#" className="btn btn-primary stretched-link">View Profile</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
                                <label htmlFor="id-of-input" className="custom-checkbox">
                                    <input type="checkbox" id="id-of-input" />
                                    <i className="glyphicon glyphicon-star-empty" />
                                    <i className="glyphicon glyphicon-star" />
                                    <span>Favorite</span>
                                </label>
                            </div>



                        </div>
                    </div>
                </Container>


            </>
        )
    }
}
