import React from 'react';
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {

    const { src, price, title, location, sellerId, iId } = this.props.data //destructure the data into variables

    return (

      <Link to={`/item/${iId}`}>
      
        <div className="row" style={{ display: 'inline-block' }}>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card">
              <img className="img"  style={{margin: 'auto', height: '120px', maxWidth: '50%'}} src={src} />
              <div className="card-body">
                <h4 className="card-title">{`Rs= ${price}`}</h4>
                <h5 className="card-text"> {title}</h5>
                <p className="card-text"> {location}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

    )
  }
}
export default Card;