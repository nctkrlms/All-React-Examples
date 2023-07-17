import React, { Component } from "react";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!");
    }
    renderEmpty() {
        return (
            <NavItem>
                

                <NavLink> 
                <FontAwesomeIcon icon={faShoppingCart} /> 
                Sepet Boş</NavLink>
            </NavItem>
        );
    }

    rednerSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ textDecoration: 'none', color: 'white' }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ textDecoration: 'none', color: 'white' }}/> 
                    Sepet
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge
                                color="danger"
                                onClick={() => this.removeFromCart(cartItem.product)}
                            >
                                X
                            </Badge>
                            {cartItem.product.productName}
                            <Badge color="success"> {cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart">Go to Cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.rednerSummary() : this.renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);