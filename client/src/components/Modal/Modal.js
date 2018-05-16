/*import React, { Component } from "react";
import Modal from "react-modal";
// import "./Modal";
// import Modal from '../../components/Modal';

class Modal extends Component {
    constructor() {
        super()
        this.state = {
            isActive:false
        }
    }
   
     componentWillMount(){
        Modal.setAppElement('body');
     }

     toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
     }

    render () {
    return (

             
               
                <Modal isOpen={this.state.isActive}  onRequestClose={this.toggleModal}>
                    Hello
                    <button onClick={this.toggleModal}  > CLOSE </button>
                    

                </Modal>
                
             
        );
    }
}
export default Modal;

*/

import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Modal extends Component {

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

    render() {
        return (
           <Modal show={this.state.isActive} onHide={this.toggleModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>

                    <h4>Popover in a modal</h4>
                    </Modal.Body>
               </Modal>

        );
    }
}

export default Modal;