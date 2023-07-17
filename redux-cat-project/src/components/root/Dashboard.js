import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Categories from '../categories/Categories';
import Products from '../products/Products';

export default class Dashboard extends Component {
  render() {
    return (
        <Container>
        <Row>
          <Col sm="3">
            <Categories/>
          </Col>
          <Col sm="9">
            <Products/>
          </Col>
        </Row>
      </Container>
    )
  }
}
