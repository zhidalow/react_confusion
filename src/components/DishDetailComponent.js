//removing "Component" import since we can implement this component as functional component instead (functions)
import React /* , { Component }  */ from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//import Comment from './CommentFormComponent';

import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish ({dish}) {

    return(
        <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

//passing in addComment and dishId as props (addComment has already been mapped to props)
function RenderComments ({comments, postComment, dishId}) {      
        
    const listitems = comments.map((group) => {/*variable included inside the function, that's why got double brackets at the start*/
            return (
    
            <div style={{fontSize:14}}>
                <ul style={{paddingLeft:"0px", listStyle:"none"}}>
                    <li key={group.id} style={{listStyleType:"none"}}>
                        <div>{group.comment}</div>
                        -- {group.author + " " + 
                        new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(group.date.substring(0,10))))}
                    </li>
                </ul>
            </div>)
        
}
    );
    
        return (
                <div>
                <h4>Comments</h4>
                    {listitems}
                    <Comment dishId={dishId} postComment={postComment}/>
                </div>

        )
}



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
        this.toggleModal();
        //alert('Current State is: ' + JSON.stringify(values));
        //console.log(this.props.dishId);
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

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
                                    <Control.textarea model=".comment" id="comment" name="comment"
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
        

const DishDetail = (props) => {
    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }


    else if (props.dish != null) {
        return(
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <RenderComments comments={props.comment} 
                        postComment={props.postComment}
                        dishId={props.dish.id}/>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return(
            <div></div>
        );
    }
}
export default DishDetail;