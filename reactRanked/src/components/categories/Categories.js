import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
class Categories extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
    }
    selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    };

    render() {
        return (
            <>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
                    <p href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span className="fs-4">Categories</span>
                    </p>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {this.props.categories.map((category) => (
                            <li
                                key={category.id}
                                onClick={() => this.selectCategory(category)}
                                className={
                                    this.props.currentCategory.id === category.id
                                        ? "list-group-item active"
                                        : "list-group-item"
                                }
                            >
                                {category.categoryName}
                            </li>
                        ))}

                    </ul>
                    
                    <hr />

                </div>



            </>
        );
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(
                categoryActions.getCategories,
                dispatch
            ),

            changeCategory: bindActionCreators(
                categoryActions.changeCategory,
                dispatch
            ),
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
