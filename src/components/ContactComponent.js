import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,  Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname:'',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({

            //... is spread operator, will pass all parameters from this.state.touched to setState function
            //[field]: true will overwrite the state of whatever the field name is 
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        //regular expression, needs the / / 
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        // this part: email.split('').filter(x => x === '@').length !== 1 is testing to see if '@' char is present after doing a str split
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    


    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

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
                        <Form onSubmit={this.handleSubmit}>
                            {/* 'FormGroup' row is one row of the form. using bootgrap's grid inside the Form to layout various form elements */}
                            <FormGroup row>
                                
                                {/* md{2} means for medium to xtra large screen sizes, this label will take up 2 columns */}
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                
                                {/* Col in reactstrap is like 'div' in html */}
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" 
                                    placeholder="First Name" value={this.state.firstname} 

                                    // valid/invalid is boolean variable. default is <FormFeedback invalid> which shows the variable when <Input invalid = true>
                                    // Needs the valid/invalid parameters in <Input> to decide when to show object in <FormFeedback>
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}/>

                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>                                
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" 
                                    placeholder="Last Name" value={this.state.lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')} 
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>  
                                </Col>
                            </FormGroup>

                            <FormGroup row>                                
                                <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" 
                                    placeholder="Tel. Num" value={this.state.telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')} 
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>                                
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" 
                                    placeholder="email" value={this.state.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')} 
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 6, offset:2}}> {/*occupying  6 cols, but pushed 2 cols to the right*/}
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" 
                                            checked={this.state.agree} 
                                            onChange={this.handleInputChange}/> {' '}
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>                                
                                </Col>

                                <Col md={{size: 3, offset:1}}>
                                    <Input type='select' name='contactType'
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>                                
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" 
                                    value={this.state.message} 
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>                                
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

    

export default Contact;