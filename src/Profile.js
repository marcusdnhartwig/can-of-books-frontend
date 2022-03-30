import { Component } from "react";


class Profile extends Component {

  //{/* <Route path="" element={<App/>}></Route> */}
    render() {
      console.log(this.props.user, this.props.email);
      /* TODO: render information about logged in user */
      /* STRETCH TODO: if no logged in user then redirect home */
      return (
      <>
      <p>Profile page </p>
      <div>
        <p>Your Username: {this.props.user}</p>
      </div> 
      <div>
        <p>Your Email: {this.props.email}</p>
      </div>
      </>  
      )
    }
  };
  
  export default Profile;
