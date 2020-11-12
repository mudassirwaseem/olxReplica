import React from 'react'
import LogoImage from '../images/logo.png'
import Btn from '../images/btn1.png'
import { Modals, Modals1 } from '../Modals'
import facebook_login from '../config/facebookLogin'
import { Link } from "react-router-dom";



class Logo extends React.Component {
  render() {
    return (
      <img height="50px" width="90px" src={LogoImage} alt="" ></img>
    )
  }
}

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      render: {},
      currentUser: {}
    }
  }
  handleFbLogin = () => {
    new Promise((res, rej) => facebook_login(res, rej))
      .then(data => {
        this.state.render.isLoggedIn = true
        this.state.currentUser = data
        this.setState(this.state)
      })
      .catch(error => console.log(error.message))
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          <Logo />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control1 mr-sm-3 m-3" type="search" placeholder="Pakistan" aria-label="Search" />
            </form>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control2 mr-sm-3" type="search" placeholder="Find Cars, Mobiles phone and other" aria-label="Search" />
              <button >  <img height="40px" src={Btn}></img></button>
            </form>
          </div>
          {/* <button className="loginBtn" >  Login</button> */}
          {this.state.render.isLoggedIn ?
            <React.Fragment>
              <img src={this.state.currentUser.image} />
              <Link to='/data'> <button className="saleBtn"> + Sale</button></Link>
            </React.Fragment>
            :
            <React.Fragment>
              <Modals name="Login" facebookLogin={this.handleFbLogin} />
              <Link to='/'> <button className="saleBtn"> + Sale</button></Link>
            </React.Fragment>}
          {/* <Modals1/> */}
        </nav>

      </div>
    )
  }
}




export default Header;