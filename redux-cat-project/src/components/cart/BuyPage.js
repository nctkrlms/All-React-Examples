import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
class BuyPage extends Component {
    totalPrice(){
        let totalPrice = 0;
        this.props.cart.map((cartItem) => (
            totalPrice += cartItem.product.price * cartItem.quantity
        ))
        return totalPrice;
    }
  render() {
    return (
        <div className="container">
        <div className="row">


        <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" height="100px" width="200px" alt="" />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1060</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card p-3">
              <div className="card-body border p-0">

                <div className="collapse p-3 pt-0" id="collapseExample">
                  <div className="row">
                    <div className="col-8">
                      <p className="h4 mb-0">Summary</p>
                      <p className="mb-0"><span className="fw-bold">Product:</span><span className="c-green">: Name of
                          product</span></p>
                      <p className="mb-0"><span className="fw-bold">Price:</span><span className="c-green">{this.totalPrice()}</span></p>
                      <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                        nihil neque
                        quisquam aut
                        repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                        quis,
                        iste harum ipsum hic, nemo qui!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body border p-0">
                <p>
                  <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                    <span className="fw-bold">Credit Card</span>
                    <span className>
                      <span className="fab fa-cc-amex" />
                      <span className="fab fa-cc-mastercard" />
                      <span className="fab fa-cc-discover" />
                    </span>
                  </a>
                </p>
                <div className="collapse show p-3 pt-0" id="collapseExample">
                  <div className="row">
                    <div className="col-lg-5 mb-lg-0 mb-3">
                      <p className="h4 mb-0">Summary</p>
                      <p className="mb-0"><span className="fw-bold">Products:</span><span className="c-green">
                        {this.props.cart.map((cartItem) => (
                            <div key={cartItem.product.id}>
                                <p>{cartItem.product.productName}</p>
                            </div>
                        ))}
                      </span>
                      </p>
                      <p className="mb-0">
                        <span className="fw-bold">Price:</span>
                        <span className="c-green">:{this.totalPrice()} TL</span>
                      </p>

                    </div>
                    <div className="col-lg-7">
                      <form action className="form">
                        <div className="row">
                          <div className="col-12">
                            <div className="form__div">
                              <input type="text" className="form-control" placeholder=" " />
                              <label htmlFor className="form__label">Card Number</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form__div">
                              <input type="text" className="form-control" placeholder=" " />
                              <label htmlFor className="form__label">MM / yy</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form__div">
                              <input type="password" className="form-control" placeholder=" " />
                              <label htmlFor className="form__label">cvv code</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form__div">
                              <input type="text" className="form-control" placeholder=" " />
                              <label htmlFor className="form__label">name on the card</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="btn btn-primary w-100">Sumbit</div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
                            <Button>
                                <Link to={"/success"}>Make Payment</Link>
                            </Button>
          </div>
        </div>
      </div>
      
    )
  }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            
            totalPrice: bindActionCreators(cartActions.totalPrice, dispatch)
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);