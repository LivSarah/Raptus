import React from 'react'
import './Styles/ContactForm.scss';
import {Form, FormGroup, Button} from 'react-bootstrap';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    handleSubmit = (e) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxHdzSzYEh8EjQfmxZc0fDFl3C7FFMra3uoJmwrXnW6dtYeIciZ/exec';
        const form = document.forms['submit-to-google-sheet'];
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  console.log('Success!', response);
                })
              .catch(error => {
                console.error('Error!', error.message);
              });

        alert("Takk for din melding!");
        form.reset();
    }

    render() {

        return (
            <div className="ContactForm">
                <Form name="submit-to-google-sheet">
                    <FormGroup>
                        <Form.Label>Navn</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Bruce Wayne" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>E-post</Form.Label>
                        <Form.Control name="email" type="email" placeholder="bruce.wayne@awesome.no" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Melding</Form.Label>
                        <Form.Control name="message" as="textarea" rows="3" placeholder="Din melding til oss..." />
                    </FormGroup>
                    <Button type="submit" className="btn btn-light" onClick={this.handleSubmit}>Send</Button>
                </Form>
            </div>
        )
    };
  }
  
  export default ContactForm