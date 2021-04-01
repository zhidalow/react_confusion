import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }


    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>

                                <Label htmlFor="rating">Rating</Label>
                                    <div>
                                        <Control.select model=".rating" id="rating" name="rating" style={{width: '100%'}}>
                                            
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            
                                        </Control.select>
                                    </div>
                                        
                                    
                                    
                            
                                <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"                                    
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    
                                    <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"

                                    //messages only show up if validators resolve to false. Messages show up sequentially
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                                <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />

                                <Button type="submit" color="primary" className="mt-2">
                                Submit
                                </Button>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

            

        )
    }
}

export default Comment;