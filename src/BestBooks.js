import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import "./BestBooks.css";


let SERVER = process.env.REACT_APP_SERVER;

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
      })
      console.log(this.state.books);
    } catch (error) {
      console.log('we have an error:', error.response)
    }
  }
  // when the site loads (has all it needs), the data will be displayed
  componentDidMount() {
    this.getBooks();
  }
  render() {
    /* TODO: render user's books in a Carousel */

    let bookCarousel = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </Carousel.Item>
    ))

    return (
      <>
      <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>
      {this.state.book.length ? (
        <Carousel>
          {bookCarousel}
        </Carousel>
      ) : (
        <h1>No Books Found</h1>
      )}
      </>
    );

  };
};

export default BestBooks;
