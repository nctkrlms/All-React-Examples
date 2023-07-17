import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Login from './components/login-register/Login'
import Register from './components/login-register/Register'
import { Routes, Route } from 'react-router-dom'
import Header from './components/navi/Header'
import Dashboard from './components/dashboard/Dashboard'
import Details from './components/cart/Details'
import Order from './components/cart/Order'
import Payment from './components/cart/Payment'

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col >
            <Header />
          </Col>
        </Row>
      </Container>



      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Details />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/buyPage" element={<Payment />} />
      </Routes>

    </>




    // <Container>
    //   <Row>
    //     <Col sm="3">
    //       <Categories/>
    //     </Col>
    //   </Row>
    // </Container>

  )
}

export default App
