import React, { Component } from "react";
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
    DropdownItem
} from 'reactstrap';
export default class CustomNavBar extends Component{
    state = {
        navtags : [
            {link: "https://github.com/nctkrlms",title:"Github"},
            {link: "https://github.com/nctkrlms",title:"Github"},
            {link: "https://github.com/nctkrlms",title:"Github"}
          ]

    };
    render(){
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    
                    <img src="/logo.jpg" alt="" className="w-100" width="100px" height="50px"/>
                    
                </NavbarBrand>
                
                    <Nav className="ml-auto" navbar>
                        {this.state.navtags.map((tag, index) => (
                            <NavItem key={index}>
                                <NavLink href={tag.link}>{tag.title}</NavLink>
                            </NavItem>
                        ))}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Navbar>
        </div>
    )};
}
