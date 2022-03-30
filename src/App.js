import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';

//let server = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: '',
      email: ''
    }
  }

  usernameHandler = (username) => {
    console.log(username);
    this.setState({
      username: username
    })
    console.log(this.state.username);
  }

  emailHandler = (email) => {
    console.log(email);
    this.setState({
      email: email
    })
    console.log(this.state.email);
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.username
              ?
              <BestBooks/>
              :
              <Login
              usernameHandler={this.usernameHandler}
              emailHandler={this.emailHandler}
              />
              }
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
