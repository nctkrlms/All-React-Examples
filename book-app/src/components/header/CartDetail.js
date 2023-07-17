import React, { Component } from "react";
import * as categoryActions from "../../redux/actions/categoryActions";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartDetail extends Component {
    componentDidMount(){
        this.props.actions.getCategories();
    }

    

    render() {
        const selectCategory=(category)=>{
            console.log(category);
            this.props.currentCategory = category;

        }
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ textDecoration: 'none', color: 'white' }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ textDecoration: 'none', color: 'white' }}/> 
                    Categories
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.categories.map((category) => (
                        <DropdownItem key={category.id}>
                            
                            <Link to={"/category/"+category.id} style={{ textDecoration: 'none', color: 'black' }} onClick={()=>selectCategory(category)}>
                                <Badge color="success" style={{ marginLeft: '10px' }}>
                                    {category.name}
                                </Badge>
                            </Link>
                            
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryReducer,
        currentCategory: state.changeCategoryReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(
                categoryActions.getCategories,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);