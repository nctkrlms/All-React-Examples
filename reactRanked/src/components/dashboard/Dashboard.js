import React, { Component } from 'react'
import Categories from '../categories/Categories'
import { Container,Row,Col } from 'reactstrap'
import Products from '../products/Products'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col sm="3">
            <Categories />
                </Col>
                <Col sm="9">
                    <Products/>
                </Col>
            </Row>
        </Container>


      </div>
    )
  }
}
