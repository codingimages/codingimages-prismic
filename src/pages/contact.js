import React from 'react'

// components
import MainLayout from '../components/layout/MainLayout'
import HeaderStatic from "../components/layout/HeaderStatic"

// bootstrap components
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

class FormikCloudForm extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        alert: null,
    }

    handleSubmit = () => {

        try {
            fetch('https://api.formik.com/submit/codingimages/coding-images', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            })

            this.setState({
                alert: "Your message was sent successfuly"
            })

        } catch (error) {

            this.setState({
                alert: null
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        return (
            <MainLayout>
                <HeaderStatic
                    pageType="Contact Form"
                    pageSummary="Let us know what help do you need or if you have any questions."
                />
                <Container>

                    {this.state.alert !== null ? <div className="alert alert-success mt-5" role="alert">{this.state.alert}</div> : null}

                    <Form onSubmit={this.handleSubmit} className="w-75 mx-auto py-5">

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                type="text"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </MainLayout>
        )
    }

}

export default FormikCloudForm
