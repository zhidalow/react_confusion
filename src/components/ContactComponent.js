import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Row, Label } from 'reactstrap';

// react-redux-form simplifies many of the form creation implementation; no longer need handleBlur, handleChange, 
//no need store state within "ContactComponent", all state changes handled by redux instead now
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //updating input to be js obj "values", as we are no longer keeping track of values using "this.state"
    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        // event.preventDefault();
    }
    


    render() {

        return(
            <div className="container">
    
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
    
                    <BreadcrumbItem active>
                        Contact Us
                    </BreadcrumbItem>
                    </Breadcrumb>
    
                    <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                    </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            
                            {/* need to add a href for skype link if we want to link to skype */}
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            {/* 'Row' one row of the form. using bootgrap's grid inside the Form to layout various form elements */}
                            <Row className="form-group">
                                
                                {/* md{2} means for medium to xtra large screen sizes, this label will take up 2 columns */}
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                
                                {/* Col in reactstrap is like 'div' in html. Needs "form-control" className */}
                                <Col md={10}>
                                    <Control.Text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        />
                                </Col>
                            </Row>

                            <Row className="form-group">                                
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.Text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>

                            <Row className="form-group">                                
                                <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.Text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>

                            <Row className="form-group">                                
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.Text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 6, offset:2}}> {/*occupying  6 cols, but pushed 2 cols to the right*/}
                                    <div className="form-check">
                                        <Label check>
                                            <Control.Checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>                                
                                </Col>

                                <Col md={{size: 3, offset:1}}>
                                    <Control.Select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.Select>
                                </Col>
                            </Row>

                            <Row className="form-group">                                
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.Textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">                                
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }

}

    

export default Contact;