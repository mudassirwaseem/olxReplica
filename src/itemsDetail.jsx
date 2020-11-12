import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { getAddData, getUserData } from './firebase'

class Item extends React.Component {
  componentDidMount() {
    let iId = this.props.match.params.id
    var promise = new Promise((resolve, reject) => getAddData(resolve, reject, iId))
      .then((data) => {//when the data is returned from the firebase, it will be reflected inside data attribute
        new Promise((res, rej) => getUserData(res, rej, data.sellerId))
          .then((userData) => this.setState({ adData: data, userData }))

        console.log(data)
      })
      .catch((error) => {//log the error here

        console.log(error)
      })
  }
  render() {


    return (
      this.state ?
        <Fragment>
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div className="card0 ">
              <img style={{ margin: 'auto' }} className="img" height='100%' src={this.state.adData.src[0]} />
            </div>
            <div className="card1">
              <div className="card-body">
                {/* <h2 style={{ textDecoration: 'underline' }}>Details</h2> */}

                <h2 className="card-title">{`Rs = ${this.state.adData.price}`}</h2>
                <h2 className="card-text"> {this.state.adData.title}</h2>


                <h5 style={{ fontWeight: 'bold' }} className="card-text"> {this.state.adData.location}</h5>


                <h6 className="card-text"> {this.state.adData.createdAt}</h6>
                <hr />
                <h3 style={{ textDecoration: 'underline' }}>Seller Discription</h3>
                <h5 style={{ fontWeight: '70px', margin: '20px' }} className="card-title"> {`Name : ${this.state.userData.name}`}</h5>
                <button className='slBtn'>Chat With Seller</button>
                <h6 style={{ border: '1px solid', margin: '10px' }} >0312-1122334</h6>


              </div>
            </div>
          </div>
          <div>

            <div className="container">
              <div className="row">
                <div className="col"><h3>Details</h3></div>
              </div>
              <div className="row">
                <div className="col">Condition</div>
                <div className="col">{this.state.adData.condition}</div>
                <div className="col">Category</div>
                <div className="col">{this.state.adData.category}</div>
              </div>

            </div>
            <div className="container">

              <div className="row">
                <div className="col"><h4>Description</h4></div>
              </div>
              <div className="row">
                <div className="col">{this.state.adData.description}</div>

              </div>


            </div>
          </div>
        </Fragment>

        :
        <h1 >Loading...</h1>

    )
  }
}

export default withRouter(Item);
