
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class BookFormModal extends React.Component {

  bookAddFunction = (event) => {
    event.preventDefault();
    let userBook={
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      email: event.target.email.value
    }
    this.props.postBooks(userBook);
    this.props.onHide();

  }

  render () {
    return (
      <Container>
        <Form
        onSubmit={this.bookAddFunction}
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
            label="Been there, read that."
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
            Add Book to Collection
          </Button>
        </Form>
      </Container>
    );
  };
};


export default BookFormModal;