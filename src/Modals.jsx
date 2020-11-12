import React from 'react'
import { Button , Modal} from 'react-bootstrap'
import facebook_login from './config/facebookLogin'


class Modals extends React.Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    handleModal(){
        this.setState({show:!this.state.show})
    }


    
    render(){
        return(
            <div className='modalDiv'>
                <Button className='ModalBtn' onClick={()=>{this.handleModal()}}> {this.props.name}</Button>
                
              <Modal className='Modal' show={this.state.show}>
                  <Modal.Header className='modalHeader'> <h1 >Login</h1></Modal.Header>
                  <Modal.Body>
                      <input className='modalInput' placeholder='Enter Email'/>
                      <br/>
                      <input className='modalInput' placeholder='Enter Password'/>
                      <br/>
                      <button className='modalBtn'> Login</button>

                  </Modal.Body>
                  <Modal.Footer>
                      <button onClick={this.props.facebookLogin} className='modalBtn1'> CONTINUE WITH FACEBOOK</button>
                      {/* <button className='modalBtn2'> CONTINUE WITH EMAIL</button> */}

                  
                  </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


class Modals1 extends React.Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    handleModal1(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div className='modalDiv'>
                <Button className='saleBtn' onClick={()=>{this.handleModal1()}}> +Sell</Button>
                
              <Modal className='Modal' show={this.state.show}>
                  <Modal.Header className='modalHeader'> <h1 >Login</h1></Modal.Header>
                  <Modal.Body>
                      <input className='modalInput' placeholder='Enter Email'/>
                      <br/>
                      <input className='modalInput' placeholder='Enter Password'/>
                      <br/>
                      <button className='modalBtn'> Login</button>

                  </Modal.Body>
                  <Modal.Footer>
                      <button  className='modalBtn1'> CONTINUE EITH FACEBOOK</button>
                      <button className='modalBtn2'> CONTINUE EITH EMAIL</button>

                      <Button onClick={()=>{this.handleModal1()}}>
                          close moda</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export {
    Modals,
    Modals1
};