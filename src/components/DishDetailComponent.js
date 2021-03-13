//removing "Component" import since we can implement this component as functional component instead (functions)
import React /* , { Component }  */ from 'react'; 

import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderDish ({dish}) {

            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }


    function RenderComments ({comments}) {      
         
        const listitems = comments.map((group) => {/*variable included inside the function, that's why got double brackets at the start*/
                return (
        
                <div style={{fontSize:14}}>
                <p key={group.id}>
                    {group.comment}
                </p> 
                <ul style={{paddingLeft:"20px"}}>
                    <li key={group.author + " " + group.date} style={{listStyleType:"square"}}>
                        {group.author + " " + 
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
                    </div>
            )
    }
            

    const DishDetail = (props) => {

        if (props.dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
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