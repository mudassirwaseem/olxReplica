import React from 'react';
import firebase from 'firebase'
import Image from './images/gallery.png'
import { Link } from "react-router-dom";


class Select extends React.Component {
    constructor() {
        super();
        this.state = {
            adInfo: {},
            data: {}
        }
    }
    componentDidMount(){
        this.loginStatus()
    }
    loginStatus = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.adInfo.sellerId = user.uid
                console.log(this.state)
              // User is signed in.
            } else {
              // No user is signed in.
            }
          });
        var user = firebase.auth().currentUser;

        // console.log('yes')
        // if (user) {
        //     console.log(user)
        // } else {
        //     console.log('no')
        //     // No user is signed in.
        // }
    }
    Submit = () => {
        alert("Add Submited")
        let key = firebase.database().ref('All Ads').push().key
        this.state.adInfo.iId = key
        // let adInfo = this.state.adInfo
        if (this.state.data.pic) {//agr pic selected h to 
            this.state.data.pic.map((data, index) => {
                firebase.storage().ref().child(`images/${key}_${index}`).put(data)//images/iId/0
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL()
                            .then(url => {//yaha url mil gya mje meri first image ka
                                console.log(url)
                                if (this.state.adInfo.src) this.state.adInfo.src.push(url)
                                else this.state.adInfo.src = [url]
                                if (this.state.adInfo.src.length === this.state.data.pic.length)//that means sb pictures uploaded
                                    firebase.database().ref('All Ads/' + this.state.adInfo.iId).set(this.state.adInfo)
                            })
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
        }
        else firebase.database().ref('All Ads/' + key).set(this.state.adInfo)
    }

    handle = parameter => e => {
        if (parameter === 'condition') {
            e.target.parentNode.childNodes[2].classList.remove('activeBtn')
            e.target.parentNode.childNodes[3].classList.remove('activeBtn')
            e.target.classList.add('activeBtn')
        }
        if (parameter === 'pic') {
            if (this.state.data.pic) this.state.data.pic.push(e.target.files[0])
            else this.state.data.pic = [e.target.files[0]]
            this.setState(this.state)
        }
        else this.state.adInfo[parameter] = e.target.value

        // console.log(this.state.adInfo)
    }
    render() {
        // this.loginStatus()
        const pictures = []
        if (this.state.data.pic) this.state.data.pic.map((data, key) => pictures.push(<p>{data.name}</p>))
        return (


            <div className='foam'>
                <div>
                    <h1>Post Your Add</h1>
                    <br />
                    <br />

                    <label htmlFor="Category">CHOOSE A CATEGORY</label>
                    <br />
                    <select name="Category" id="category" onChange={this.handle('category')}>
                        <option value=""></option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Homes & Appliance">Homes & Appliance</option>
                        <option value="Business, Industrial & Agriculture">Business, Industrial & Agriculture</option>
                        <option value="Jobs">Jobs</option>
                        <option value="Animals">Animals</option>

                    </select>
                </div>
                <br />

                <div>
                    <label for="fname">CONDITION*</label>
                    <br />
                    <button className='btn1' value="Used" onClick={this.handle('condition')}>USED</button>
                    <button className='btn1' value="New" onClick={this.handle('condition')}>NEW</button>
                </div>
                <br />
                <label for="fname">ADD TITLE*</label><br />
                <input type="text" id="title" onChange={this.handle('title')} placeholder='Title*' />
                <br />
                <br />

                <label for="fname">DESCRIPTION*</label><br />
                <textarea type="text" id="description" placeholder='Description*' onChange={this.handle('description')} name="description" />
                <br />
                <br />

                <h4>SET A PRICE*</h4>

                <label for="fname">RS:</label>

                <input type="number" required id="title" onChange={this.handle('price')} name="title" placeholder='1200' />
                <br />
                <br />

                <label htmlFor="Category">CONFIRM YOUR LOCATION</label>
                <br />
                <input type="text" id="title" onChange={this.handle('location')} name="title" placeholder='Location*' />

                {/* <select name="LOCATION" id="LOCATION" onChange={this.handle('location')}>
                    <h4>City*</h4>
                    <option value=""></option>
                    <option value="Karachi">Karachi</option>
                    <option value="lohore">Lohore</option>
                    <option value="Multan">Multan</option>
                    <option value="Pindi">Peshawer</option>
                    <option value="Quetta">Quetta</option>
                </select> */}
                <br />
                <br />

                <div className="root">
                    <h4 className="flexCenter">UPLOAD PHOTO</h4>
                    <input type="file" id="pic" style={{ display: 'none' }} onChange={this.handle('pic')} />
                    <label htmlFor="pic">
                        <img height='100px' src={Image} />
                        <div>{pictures}</div>

                    </label>
                    {/* <button onClick={this.upload}>upload</button> */}
                </div>
                <Link to='/'>  <button className='submitBtn' onClick={this.Submit}>Submit Ad</button></Link>
            </div>
        )
    }
}
export default Select;