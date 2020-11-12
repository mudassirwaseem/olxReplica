import React from 'react'

import Card from './Card'
import { getAdds } from './firebase'
import './App.css'



class SetData extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {// this function will run once when the component is successfully mounted
        // as js is a synchronous language we have to use promise method for async data
        var promise = new Promise((resolve, reject) => getAdds(resolve, reject))
            .then((data) => {//when the data is returned from the firebase, it will be reflected inside data attribute
                this.state.data = data
                this.setState(this.state)
            })
            .catch((error) => {//log the error here

                console.log(error)
            })
    }
    render() {
        var addsData = []
        // use the map method here to save every add data into an object
        // console.log(this.state.data)
        if (this.state.data) this.state.data.map((data, key) => addsData.push(<Card data={data} key={key} />))
        return (

            <div>
                {addsData}
            


            </div>
        )
    }
}
export default SetData;