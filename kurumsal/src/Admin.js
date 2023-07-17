import React, { Component } from 'react'
import { Container, Row,Col } from 'reactstrap'
import { Form, Label, Input, FormGroup, FormText, Button} from 'reactstrap'

export default class Admin extends Component {
    state = {
        um: "",
        up: "",
        ur: "",
        roleNameHandler: "",
        roleHandler: [],
        count: 0,
        lastRoleName:"",
    
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
        console.log(userSelect,id,userSelect[0].userRole,role)
        var jsonData = { "roleId": id, "userName": userSelect[0].mail, "image": "images/product.jpg", "desc": userSelect[0].password }
        fetch("http://localhost:3001/user", {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(jsonData),
          headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })  
      }
      getRole= ()=>{
        let rolesd= this.props.roles
        this.state.roleHandler = rolesd
        rolesd.push({name:this.state.roleNameHandler})
        this.setState({roleHandler:rolesd})
        //this.roleHandler.push({name:this.state.roleNameHandler})
        this.postRole();

      }

      postRole =()=>{
        console.log(this.state.roleHandler)
        var roleSelect = this.state.roleHandler[this.state.roleHandler.length-1]
        console.log(roleSelect)
        var jsonData = {"roleName":roleSelect.name}
        fetch("http://localhost:3001/userRole",{
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(jsonData),
          headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })


      }

      clickHandler=()=>{
        this.getRole();
        setTimeout(function(){window.location.reload()},10);

      }


    
  render() {
    return (
      <Container>
        <Row>
            <Col sm="6">
                <h2>ADD USER</h2>
            <Form>
        <FormGroup>
          <Label for="name">Name Surname</Label>
          <Input type="text" name="email" id="name" placeholder="Enter Name and Surname" onChange={(e) => this.setState({ um: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Description</Label>
          <Input type="text" name="desc" id="name" placeholder="Enter Description" onChange={(e) => this.setState({ up: e.target.value })}/>
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
                        
                        {!role.roleName?"boş":role.roleName}
                      </option>
                    ))}


                  </Input>
                </FormGroup>
        <Button onClick={() => this.getUser()}>Submit</Button>
      </Form >
            </Col>
            <Col sm="6">
                <h2>ADD ROLE</h2>
            <Form>
        <FormGroup>
          <Label for="name">Role Name</Label>
          <Input type="text" name="email" id="name" placeholder="Enter Name and Surname" onChange={(e) => this.setState({ roleNameHandler: e.target.value })} />
        </FormGroup>

        <Button onClick={() => this.clickHandler()}>Submit</Button>
      </Form>
            </Col>
        </Row>
      </Container>
    )
  }
}
