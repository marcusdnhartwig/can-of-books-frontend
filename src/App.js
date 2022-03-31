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
import Profile from './Profile';
// import LogoutButton from './LogoutButton';

//let server = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: ''
    }
  }

  userHandler = (user) => {
    console.log(user);
    this.setState({
      user: user
    })
    //console.log(this.state.user);
  }

  emailHandler = (email) => {
    console.log(email);
    this.setState({
      email: email
    })
    //console.log(this.state.email);
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
          <Header 
            user={this.state.user} 
            onLogout={this.logoutHandler}
          /> 
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user
              ?
              <BestBooks email={this.state.email}/>
              :
              <Login
              userHandler={this.userHandler}
              emailHandler={this.emailHandler}
              />
              }
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/Profile">
             <Profile user={this.state.user} email={this.state.email}/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
