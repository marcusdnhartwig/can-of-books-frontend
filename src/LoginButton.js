import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';
import Modal from 'react-bootstrap/Modal';


export default class LoginButton extends Component {
  constructor(props) {
    super(props)
    this.state={
      showModal:false,
    };
  };

  modalHandler=() => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };


  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (

      <>
        <Button
        onClick={this.modalHandler}
        >
          User Login/Signup
        </Button>

        <Modal
        show={this.state.showModal}
        onHide={this.modalHandler}
        >
          <Modal.Header /*closebutton={this.modalHandler}*/>
            <Modal.Title>Sign Up / Log in</Modal.Title>
          </Modal.Header>
          <LoginForm
          usernameHandler={this.props.usernameHandler}
          emailHandler={this.props.emailHandler}
          />
        </Modal>
      </>
    );
  };
};
