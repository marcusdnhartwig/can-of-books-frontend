import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
//import BookDeleteModal from './BookDeleteModal';
import BookUpdateModal from './BookUpdateModal';
import "./BestBooks.css";


let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalAddBooks: false,
      modalDeleteBooks: false,
      modalUpdateBooks: false,
      bookToUpdate: null
    }
  }

  modalFormShow = () => {
    this.setState({
      modalAddBooks: true
    })
  };

  deleteFormModalShow = () => {
    this.setState({
      modalDeleteBooks: true
    })
  }

  updateFormModalShow = (book) => {
    this.setBook(book)
    this.setState({
      modalUpdateBooks: true
    })
  }

  onHide = () => {
    this.setState({
      modalAddBooks: false,
      modalDeleteBooks: false,
      modalUpdateBooks: false
    })
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books?email=${this.props.email}`);
      console.log(results);
      this.setState({
        books: results.data
      })
      // console.log(this.state.books);
    } catch (error) {
      console.log('we have an error:', error.message)
    }
  }

  postBooks = async (book) => {
    try {
      let bookAdd = await axios.post(`${SERVER}/books`, book);
      this.setState({
        books: [...this.state.books, bookAdd.data]
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
      this.setState({
        books: trimmedCollection,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  bookUpdate = async (updatedBook, id) => {
    // let bookID = books._id 
    console.log(updatedBook);
    try {
      let bookBackend = await axios.put(`${SERVER}/books/${id}`, updatedBook);
      console.log(bookBackend);
      // this.setState({
      //   books: [...this.state.books]
       
      // })
    } catch (error) {
      console.log('we have an error:', error.response)
    }
  }
    
  //   try {
  //     let url = `${SERVER}/books/${updatedBook.id}`
  //     let backendBook= await axios.post(url, updatedBook);
  //     let backendBookData = this.state.books.map(exitingBook => {
  //       return exitingBook._id === updatedBook._id ? backendBook.data : exitingBook;
  //     });
  //     this.setState({ books: backendBookData });
  //   } catch (error) {
  //     console.log('we were unable to update your book', error.response)
  //   }
  // }

  componentDidMount() {
    this.getBooks();
  };

  // when the site loads (has all it needs), the data will be displayed
  setBook = (obj) => {
    this.setState({
      bookToUpdate: obj
    })
  };
  
  render() {
    /* TODO: render user's books in a Carousel */
    // setState of book to book from .map method, pass state to bookUpdateModal
    let bookCarousel = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <h3>Title: {book.title}</h3>
        <p>Description: {book.description}</p>
        {/* {this.setBook(book)}, */}

        <Button
          onClick={() => this.modalDeleteBooks(book._id)}
        >
          Remove {book.title} from Your Collection
        </Button>
        <Button
          onClick={()=>this.updateFormModalShow(book)} 
          book= {book}
        >
          
          Update {book.title}'s Info
        </Button>
      </Carousel.Item>
    ))

    return (
      <>
        <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>
        <main>
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
              {/* <Button
          onClick={this.updateFormModalShow}
          >
            Update Book in Your Collection
          </Button> */}

            </div>
          ) : (
            <>
              <h1>No Books Found</h1>
              <Button
                onClick={this.modalFormShow}
              >
                Add Book To Your Collection
              </Button>

              {/* <Button
          onClick={this.updateFormModalShow}
          >
            Update Book in Your Collection
          </Button> */}
              {/* <Button
          onClick={this.modalDeleteBooks}
          >
            Remove A Book From Your Collection
          </Button>
           */}
            </>
          )}

          <Modal
            show={this.state.modalAddBooks}
            onHide={this.onHide}
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
            show={this.state.modalUpdateBooks}
            onHide={this.onHide}
          >
            <Modal.Header>
              <Modal.Title>Update A Book in Your Collection</Modal.Title>
            </Modal.Header>

            <div>
              <BookUpdateModal

                bookUpdate={this.bookUpdate}
                onHide={this.onHide}
                book={this.state.bookToUpdate}
              />
            </div>
          </Modal>
        </main>
      </>
    );

  };
};



export default BestBooks;
