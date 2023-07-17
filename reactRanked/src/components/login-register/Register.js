import React, { Component } from 'react'
import './Deneme.css'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default class Register extends Component {
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
              placeholder="Mail Address"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Password"
            />
            <input
              type="text"
              id="login"
              className="fadeIn fourth"
              name="login"
              placeholder="Name Surname"
            />
            <input
              type="text"
              id="login"
              className="fadeIn fifth"
              name="login"
              placeholder="Adress"
            />
            <input
              type="submit"
              className="fadeIn sixth"
              defaultValue="Log In"
              placeholder="denem"
            />
          </form>

          <Button style={{ marginBottom: '10px' }} className="fadeIn seventh">
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/'}
            >
              Hesabınız var mı?
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}
