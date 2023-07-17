import React, { Component } from 'react'
import { Form, Label, Input, FormGroup, FormText, Button, Container, Row, Col } from 'reactstrap'

export default class Contact extends Component {
  state = {
    um: "",
    up: "",
    ur: "",
    count: 0,

    user: [],

  }
  getUser = () => {

    let usersd = this.state.user;
    usersd.push({ mail: this.state.um, password: this.state.up, userRole: this.state.ur })
    this.setState({ user: usersd });
    let g = this.state.count + 1;
    this.setState({ count: g })

    console.log(this.state.user[0].mail)
    this.postUser();
  }

  postUser = () => {
    var userSelect = this.state.user.splice(-1)
    var role = this.props.roles.find(x => x.roleName === userSelect[0].userRole)

    var id = role.id
    // console.log(userSelect,id,,userSelect[0].userRole,role)
    var jsonData = { "roleId": id, "userName": userSelect[0].mail, "image": "images/product.jpg", "desc": "yeni eklenmiş üye" }
    fetch("http://localhost:3001/user", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jsonData),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })  
  }

  render() {

    return (
      <>
        <Container>
          <Row>
            <Col sm="3"></Col>

            <Col sm="6">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    onChange={(e) => this.setState({ um: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">
                    Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    onChange={(e) => this.setState({ up: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">
                    Select
                  </Label>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    onChange={(e) => this.setState({ ur: e.target.value })}
                  >
                    {this.props.roles.map((role) => (
                      <option key={role.id}>
                        {role.roleName}
                      </option>
                    ))}


                  </Input>
                </FormGroup>

                <Button onClick={() => this.getUser()}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col sm="3"></Col>

          </Row>
        </Container>
        <Container>
          <Row>

            {this.state.user.map((a) => (
              <div>
                <h3>mail:{a.mail}</h3>
                <h3>password:{a.password}</h3>
                <h3>role:{a.userRole}</h3></div>
            ))}


          </Row>
        </Container>
      </>
    )
  }
}
