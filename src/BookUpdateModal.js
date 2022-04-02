import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookUpdateModal extends React.Component {

  updateBookFunction = (event) => {
    event.preventDefault(); // sweet.
    //console.log(event.target);
    console.log(this.props);
    let updatedBook={
      title: event.target.title.value || this.props.book.title,
      description: event.target.description.value || this.props.book.description,
      status: event.target.status.checked || this.props.status.checked,
      email: event.target.email.value || this.props.email.value,
      _id: this.props.book._id
    } 
    //console.log(updatedBook);
    this.props.bookUpdate(updatedBook, this.props.book._id);
    this.props.onHide();

  }

  render () {
    return (
      <Container>
        <Form
        onSubmit={this.updateBookFunction}
        >
          <Form.Group
          controlId="title"
          >
            <Form.Label>Book Title</Form.Label>
            <Form.Control
            type="text"
            />
          </Form.Group>
          <Form.Group
          controlId="description"
          >
            <Form.Label>What is this book about?</Form.Label>
            <Form.Control
            type="text"
            />
          </Form.Group>
          <Form.Group
          controlId="status"
          >
            <Form.Check
            type="checkbox"
            label="I finished reading this"
            />
          </Form.Group>
          <Form.Group
          controlId="email"
          >
            <Form.Label>Confirm Your Email</Form.Label>
            <Form.Control
            type="email"
            />
          </Form.Group>
          <Button
          type="submit"
          >
            Update this Book
          </Button>
        </Form>
      </Container>
    );
  };
};


export default BookUpdateModal;