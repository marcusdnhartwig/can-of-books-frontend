import { Component } from "react";

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
    return (
      <form>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
      </form>
    );
  }
};

export default LoginForm;
