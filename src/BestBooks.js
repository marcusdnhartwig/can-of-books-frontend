import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })REACT_APP_SERVER=<your-server>
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  // when the site loads (has all it needs), the data will be displayed
  componentDidMount() {
    this.getBooks();
  }
  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
      <Carousel>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </Carousel>
      </>
    )
  }
}

export default BestBooks;
