import React from 'react';
import Foter from '../images/olx sss.png'

class Footer1 extends React.Component{
  render(){
      return (
    
        <div className="container1">

<div className="row">
<div className="col1"><img src={Foter} alt=""/></div>
<div className="col1">  <h2  style={{ fontWeight: 'bold', margin: '20px' }}>TRY THE OLX APP</h2>
<br/>
<h5>Buy, sell and find just about anything using the app on your mobile.</h5>
</div>
<div className="col1">  <h5  style={{ fontWeight: 'bold', margin: '20px' }}>GET YOUR APP TODAY</h5>
<button  style={{ margin : '10px', backgroundColor : 'black'
, width : '120px', color : 'white' , height: '40px' , borderRadius : '10px'}}>App Store</button>
<button  style={{ margin : '10px', backgroundColor : 'black'
, width : '120px', color : 'white' , height: '40px' , borderRadius : '10px'}}>Google Play</button></div>

</div>

    </div>

      )
  }
}


class Footer extends React.Component {
  render() {
    return (

      <div>
        <Footer1/>
       <footer className=" ">
        <div className="page-footer">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">POPULAR CATEGORIES</h5>
              <ul className="list-unstyled">
              <li>
                  <a href="#!">Cars</a>
                </li>
                <li>
                  <a href="#!">Flats</a>
                </li>
                <li>
                  <a href="#!">Jobs</a>
                </li>
                <li>
                  <a href="#!">Mobile Phone</a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">TRENDING SEARCHES</h5>
              <ul className="list-unstyled">
              <li>
                  <a href="#!">Bike</a>
                </li>
                <li>
                  <a href="#!">Watches</a>
                </li>
                <li>
                  <a href="#!">Books</a>
                </li>
                <li>
                  <a href="#!">Dogs</a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">ABOUT US</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About OLX Group</a>
                </li>
                <li>
                  <a href="#!">OLX Blog</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">OLX for Businesses</a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">OLX</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Bike</a>
                </li>
                <li>
                  <a href="#!">Watches</a>
                </li>
                <li>
                  <a href="#!">Books</a>
                </li>
                <li>
                  <a href="#!">Dogs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://www.olx.com/"> SabBechDo.com </a>
        </div>
      </footer>
      </div>
    )
  }
}




export default Footer;