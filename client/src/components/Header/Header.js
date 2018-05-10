import React, {Component} from 'react';
import "./Header.css";
// import Modal from "react-modal";
// import "./Modal";
import Form from '../../components/Form';
import { Modal } from 'react-bootstrap';
import { Input, TextArea, FormBtn , Login , Signup} from "../../components/Form";


class Header extends Component {

    state = {
        isActive:false
    }
   
     componentWillMount(){
        // Modal.setAppElement('body');
     }

     toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
     }


    render () {
    	
        return (
            <header>
              
              <h3><button className=" btn-warning" onClick={() => this.setState({ showModal1:true, showModal2:false})} >LOGIN</button></h3>

              <h3><button className=" btn-primary" onClick={() => this.setState({ showModal2:true, showModal1:false})} >SIGN UP</button></h3>

              <Modal show={this.state.showModal1} onHide={() => this.setState({ showModal1:false})}>
                 <Login/>
              </Modal>

              <Modal show={this.state.showModal2} onHide={() => this.setState({ showModal2:false})}>
                 <Signup/>
              </Modal>

            </header>
        );
    }
}
export default Header;




