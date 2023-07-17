import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';
export default class CustomNavBar extends Component{
    state = {
        navtags : [
            {link: "/mainpage",title:"AnaSayfa"},
            {link: "/about",title:"Hakkımızda"},
            {link: "/contact",title:"İletişim"},
            {link: "/admin",title:"Admin"},
          ]

    };
    render(){
        const {basket} = this.props;
    return (
        <div>
            <Navbar color="dark" className="text-dark" dark expand="md">
                <NavbarBrand href="/">
                    
                    <img src="/img.jpg" alt="" className="w-100" width="100px" height="50px"/>
                    
                </NavbarBrand>
                
                    <Nav className="ml-auto text-dark" navbar>
                        {this.state.navtags.map((tag, index) => (
                            <NavItem key={index} className="text-dark">
                                <NavLink ><Link to={tag.link}>{tag.title}</Link></NavLink>
                                
                            </NavItem>
                        ))}
                        

                    </Nav>
            </Navbar>
        </div>
    )};
}
