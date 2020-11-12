import React from 'react';
import './App.css'
import Footer from './component/Footer'
import Header from './component/header'
import Pic from './component/main'
import SetData from './Set_data'
// import Post1 from './Upload-images(1)'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from './itemsDetail'
import Select from './dataPush'




class App extends React.Component {
  render() {
    return (

      <Router>
        <Header />
        <Pic />
        <Switch>
          <Route path='/item/:id' component={Item} />
          <Route exact path='/' component={SetData} />
          <Route exact path='/data' component={Select} />

        </Switch>
        {/* <Select/> */}
        {/* <Footer1/> */}
        <Footer />
      </Router>
    )
  }
}




export default App;
