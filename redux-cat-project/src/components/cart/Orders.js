import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class Orders extends Component {

    
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!");
    }
    totalPrice(){
        let totalPrice = 0;
        this.props.cart.map((cartItem) => (
            totalPrice += cartItem.product.price * cartItem.quantity
        ))
        return totalPrice;
    }
    render() {

        return (
            <div>
                <Container>
                    <h2>Orders</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map((cartItem) => (
                                <tr key={cartItem.product.id}>
                                    <th scope="row">{cartItem.product.id}</th>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td>
                                        {cartItem.product.price * cartItem.quantity}
                                    </td>
                                    <td>
                                        <Button
                                            color="danger"
                                            onClick={() => this.removeFromCart(cartItem.product)}
                                        >
                                            Delete
                                        </Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container>
                        <Row>
                            <h2>{this.totalPrice()}</h2>
                            <Button
                                color="success">
                                <Link to="/buyPage">BUY</Link>
                            </Button>
                        </Row>
                    </Container>

                </Container>
            </div>
        );
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
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
            totalPrice: bindActionCreators(cartActions.totalPrice, dispatch)
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);