import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: ''
    }
  };

  render() {

    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */

    let handleFormInput = (e) => {
      let inputName = e.target.name;
      let inputValue = e.target.value;
      this.setState({[inputName]:inputValue});
    }

    let handleSubmit = (e) => {
      e.preventDefault();
      let userNameInput = this.state.userName
      let emailInput = this.state.userEmail
      this.props.handleLogin(userNameInput, emailInput);
    }

    return (

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
          placeholder="Name of User, i.e. John Smith"
          name="userName"
          type="text"
          onChange={handleFormInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
          placeholder="Email of User, i.e. john.smith@website.com"
          name="emailInput"
          type="email"
          onChange={handleFormInput}
          />
        </Form.Group>
        <Button
        type="submit"
        onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    );
  };
};

export default LoginForm;
