import React from 'react';
import axios from 'axios';
import { Carousel, Card } from 'react-bootstrap';
import Image from './assets/placeholder.jpeg';
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
    return (
      let bookCarousel = this.state.books.map((book) => (
      )};
      <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      {this.state.books.length > 0 ? (
    <Carousel>
      <Carousel.Item key={book._id}>
        <Carousel.Caption id="bro">
          <h2>{book.title}</h2>
        </Carousel.Caption>
          <img className='worry'
            src={Image}
            alt='There should be an img'
            width={200}
            height={200}
          />
          <Carousel.Caption>
            <p id="dude">{book.description}</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        <Card>
          <Carousel>
            {bookCarousel}
          </Carousel>
        </Card>
      ) : (
      <h3>No Books Found</h3>
      )}
    </>
    )
  }
}
export default BestBooks;
