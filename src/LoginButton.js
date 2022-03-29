import { Component } from 'react';
// import LoginForm from './LoginForm';
import { Modal, Button} from 'react-bootstrap';
import LoginForm from './LoginForm';


export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  };
  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  };

  render() {
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
    <>
    {/* LoginButton coming soon */}
    <Button onClick={this.handleModal}>Log In</Button>
    <Modal show={this.state.modal} onHide={this.handleModal}>
      <Modal.Header closeButton={this.handleModal}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <LoginForm loginHandler={this.props.loginHandler} />
    </Modal>
    </>
    )
  }
}
