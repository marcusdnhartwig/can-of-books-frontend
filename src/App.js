import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './Profile';

//let server = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email:'',
    }
  }

  loginHandler = (user) => {
    this.setState({
      user: user,
      // email: email,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: '',
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}{this.state.user}<BestBooks/> <Login loginHandler={this.loginHandler}/>
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/Profile.js">
              {this.state.user}<Profile/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
