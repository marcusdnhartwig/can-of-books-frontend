import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: ''
    }
  };

  render() {

    const usernameF = (e) => {
      e.preventDefault();
      this.setState({user:e.target.value});
    }

    const emailF = (e) => {
      e.preventDefault();
      this.setState({email:e.target.value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.usernameHandler(this.state.user);
      this.props.emailHandler(this.state.email);
    }

    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
          placeholder="Name of User, i.e. John Smith"
          name="userName"
          type="text"
          onChange={usernameF}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
          placeholder="Email of User, i.e. john.smith@website.com"
          name="emailInput"
          type="email"
          onChange={emailF}
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
