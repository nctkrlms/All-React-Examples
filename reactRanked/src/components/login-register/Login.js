import React, { Component } from 'react'
import './Deneme.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../redux/actions/userActions'

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    address: '/login',
  }
  componentDidMount() {
    this.props.actions.getUsers()
  }
  loginUser = () => {

    this.props.actions.loginUser(this.state.user)
    if(this.props.currentUser.length>0){
      return true;
    }else{
      return false;
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              id="icon"
              alt="User Icon"
              style={{
                borderRadius: '70%',
                height: '150px',
                width: '150px',
                marginBottom: '10px',
                marginTop: '30px',
              }}
            />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              onChange={(e) => {this.setState((prevState) => ({user: {...prevState.user, email: e.target.value}}))}}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => {this.setState((prevState) => ({user: {...prevState.user, password: e.target.value}}))}}
            />
          </form>
          <Button
            className="fadeIn fourth"
            onClick={()=>this.loginUser()?this.setState(({address:'/dashboard'})):alert("Kullanıcı adı veya şifre hatalı")}
          >
            <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={this.state.address}
          >
            Giriş yap
          </Link>
          </Button>
          <Button style={{ marginBottom: '10px' }} className="fadeIn fifth">
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/register'}
            >
              Hesabınız Yok mu?
            </Link>
          </Button>
            {/* <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/api/register'}
            >
              Hesabınız Yok mu?
            </Link> */}

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.userReducer,
    currentUser: state.userReducer,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(userActions.loginUser, dispatch),
      getUsers: bindActionCreators(userActions.getUsers, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)




