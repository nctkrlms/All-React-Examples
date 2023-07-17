import React, { Component } from 'react'
import CustomNavBar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import Mainpage from './Mainpage'

import About from './About'
import Contact from './Contact'
import Admin from './Admin'


export default class App extends Component {
  state = {
    currentRole: "",
    users: [],
    roles: [],
    postModernUser: [],
  }

  getRoles = () => {
    fetch("http://localhost:3001/userRole")
      .then((response) => response.json())
      .then((data) => this.setState({ roles: data }));
  };

  changeRoles = (role) => {
    this.setState({ currentRole: role.roleName });
    this.getUsers(role.id);
  }
  getUsers = (roleId) => {
    let url = "http://localhost:3001/user";
    if (roleId) {
      url += "?roleId=" + roleId
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
      this.setState({ users: data })
      this.setState({postModernUser:data})

    });
  };


  componentDidMount() {
    this.getUsers();
    this.getRoles();
  }
  render() {
    return (
      <>
      <CustomNavBar />
      
        <Routes>
          
            <Route path='mainpage' element={<Mainpage />} />
            <Route path='contact' element={<Contact roles={this.state.roles}/>} />
            <Route path='admin' element={<Admin roles={this.state.roles} />} />
            <Route path='about' element={<About changeRoles={this.changeRoles} roles={this.state.roles} users={this.state.users} currentRole={this.state.currentRole} />} />

        </Routes>
      
      </>
      // <>
      // <CustomNavBar/>
      // <Container>
      //   <Row>
      //   <About 
      //   changeRoles={this.changeRoles}
      //   roles={this.state.roles}
      //   users={this.state.users}
      //   currentRole={this.state.currentRole}/>
      //   </Row>
      // </Container>
      // <Container>
      //   <Contact roles={this.state.roles}/>
      // </Container>
      // </>
    )
  }
}
