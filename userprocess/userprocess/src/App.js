import { Component } from "react";
import { Col, Container,Row } from "reactstrap";
import Users from "./Users";
import Roles from "./Roles";
import CustomNavBar from "./Navbar";

export default class App extends Component {
  state = {
    currentRoles: "",
    users: [],
  }
  changeRoles = (role) => {
    this.setState({currentRoles:role.roleName});
    this.getUsers(role.id);

  }
  getUsers = (roleId) => {
    let url = "http://localhost:3000/user";
    if(roleId){
      url+="?roleId="+roleId
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => this.setState({users:data}))
  }
  componentDidMount(){
    this.getUsers();
  }
  render(){

    return (
      <>
      <Container>
        <CustomNavBar/>
      </Container>
      <Container>
        <Row>
          <Col sm="3">
            <Roles changeRoles={this.changeRoles}
            currentRoles={this.currentRoles}/>
          </Col>
          <Col sm="9">
          <Users users={this.state.users}
          currentRoles={this.currentRoles}/>
          </Col>
        </Row>
      </Container>
      </>
      );
  }

}
