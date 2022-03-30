import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookDeleteModal extends React.Component {

  bookDeleteFunction = (event) => {
    event.preventDefault();
    let deleteBook = {
      title: event.target.title.value,
      email: event.target.email.value
    }
    this.props.deleteBooks(deleteBook);
    this.props.onHide();

  }

  render() {
    return (
      <Container>
        <Form
          onSubmit={this.bookDeleteFunction}
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
            controlId="email"
          >
            <Form.Label>Your Email Address</Form.Label>
            <Form.Control
              type="email"
            />
          </Form.Group>
          <Button
            type="submit"
          >
            Remove this Book From My Collection
          </Button>
        </Form>
      </Container>
    );
  };
};


export default BookDeleteModal;