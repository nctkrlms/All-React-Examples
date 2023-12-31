import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class Detail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!");
    }
    render() {
        return (
            <div>
                <Container>
                <h2>Cart Detail</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
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
                <Button
                color="success">
                    <Link to="/orders">Go to Cart</Link>
                </Button>
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
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);