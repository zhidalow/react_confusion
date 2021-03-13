import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

    //this chunk is to demo lifecycle components and shoes the order in which the components render/mount changes to DOM 

    /*componentDidMount() {
        console.log('DishDetail Component componentDidMount is invoked')
        }

    componentDidUpdate() {
        console.log('DishDetail Component componentDidUpdate is invoked')
    }*/ 

    renderDish (dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
            <div></div>
            );
        }
    }

    rendercomments (dish) {
        
        if (dish != null) {
        
        const listitems = dish.comments.map((group) => {/*variable included inside the function, that's why got double brackets at the start*/
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
        else {
            return(
                <div></div>
            );
        }
    }

            

    render() {

        //this chunk is to demo lifecycle components and shoes the order in which the components render/mount changes to DOM 

        //console.log('DishDetail Component render is invoked');

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        {this.rendercomments(this.props.dish)}
                    </div>
                </div>
            </div>
        )
        
      
    }
}
export default DishDetail;