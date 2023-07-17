import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartDetail from './CartDetail'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>
            <FontAwesomeIcon icon={faHome} />{' '}
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/dashboard'}
            >
              Ana Sayfa
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            style={{ justifyContent: 'flex-end', marginRight: '100px' }}
          >
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faUser} />
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={'/register'}
                  >
                    Kayıt Ol
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faUser} />
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={'/login'}
                  >
                    Giriş Yap
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>


            <Nav className="ml-auto" navbar>

                  
                  <CartDetail />
                
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
