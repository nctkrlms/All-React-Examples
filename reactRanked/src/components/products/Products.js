import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Button, Col, CardGroup } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class Products extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
        alertify.success(product.productName + " added to cart!", 2);
    };

    render() {
        return (
            <div>
                <h3>
                    <Badge color="warning">Products</Badge>
                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                </h3>
                <CardGroup>
                    {this.props.products.map((product) => (
                        <Col xs="3">
                            <Card
                                style={{ marginLeft: "10px", marginRight: "10px" }}
                                key={product.id}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://picsum.photos/300/200"
                                  
                                    alt={product.productName}
                                />
                                <CardBody>
                                    <CardTitle>{product.productName}</CardTitle>
                                    <CardText>{product.desc}</CardText>
                                    <Button onClick={() => this.addToCart(product)} color="info">
                                        Add
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productsReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);