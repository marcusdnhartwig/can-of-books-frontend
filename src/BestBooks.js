import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import BookDeleteModal from './BookDeleteModal'
import "./BestBooks.css";


let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalAddBooks: false,
      modalDeleteBooks: false
    }
  }

  modalFormShow=() => {
    this.setState({
      modalAddBooks:true
    })
  };

  deleteFormModalShow=() => {
    this.setState({
      modalDeleteBooks:true
    })
  }

  onHide=() => {
    this.setState({
      modalAddBooks:false,
      modalDeleteBooks:false
    })
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books?email=${this.props.email}`);
      this.setState({
        books: results.data
      })
      console.log(this.state.books);
    } catch (error) {
      console.log('we have an error:', error.response)
    }
  }

  postBooks = async (book) => {
    try {
      let bookAdd = await axios.post(`${SERVER}/books`,book);
      this.setState({
        books: [...this.state.books,bookAdd.data]
      })
  } catch (error) {
    console.log('we have an error:', error.response)
  }
  }

  modalDeleteBooks = async (id) => {
    console.log(id);
    try {
      await axios.delete(`${SERVER}/books/${id}`);
      let trimmedCollection = this.state.books.filter(book => book._id !== id);
      this.setState ({
        books: trimmedCollection,
      })
    } catch(error){
      console.log(error.response)
    }
  }

  componentDidMount() {
    this.getBooks();
  };

  // when the site loads (has all it needs), the data will be displayed


  render() {
    /* TODO: render user's books in a Carousel */

    let bookCarousel = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <p>{book._id}</p>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
       
          <Button
          onClick={()=>this.modalDeleteBooks(book._id)}
          >
            Remove {book.title} from Your Collection
          </Button>
      </Carousel.Item>
    ))

    return (
      <>
      <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>
      {this.state.books.length ? (
        <div className='bookCarousel'>
          <Carousel>
            {bookCarousel}
          </Carousel>
           <Button
          onClick={this.modalFormShow}
          >
            Add A Book to Your Collection
          </Button>
        </div>
      ) : (
        <>
          <h1>No Books Found</h1>
          <Button
          onClick={this.modalFormShow}
          >
            Add Book To Your Collection
          </Button>
          <Button
          onClick={this.modalDeleteBooks}
          >
            Remove A Book From Your Collection
          </Button>
        </>
      )}

      <Modal
      show={this.state.modalAddBooks}
      onHide={this.state.onHide}
      >
        <Modal.Header>
          <Modal.Title>Enter Book Details</Modal.Title>
        </Modal.Header>

        <BookFormModal
        postBooks={this.postBooks}
        onHide={this.onHide}
        />
      </Modal>
      <Modal
      show={this.state.modalDeleteBooks}
      onHide={this.state.onHide}
      >
        <Modal.Header>
          <Modal.Title>Remove A Book From Your Collection</Modal.Title>
        </Modal.Header>

        <BookDeleteModal
        deleteBooks={this.deleteBooks}
        onHide={this.onHide}
        />
      </Modal>
      </>
      );

    };
  };



export default BestBooks;
