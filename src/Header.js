import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {this.props.user && (
          <>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        <NavItem>
          <Link to='/Profile.js' className='nav-link'>Profile</Link>
        </NavItem>
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
     
          <LogoutButton onlogout={this.props.onlogout}/>
          </>
          )}
        
      </Navbar>
    )
  }
}

export default Header;
