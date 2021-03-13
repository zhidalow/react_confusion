import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

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
       
            <p style={{fontSize:14}}>
            <p key={group.comment}>
                {group.comment}
            </p> 
            <ul style={{paddingLeft:"20px"}}>
                <li key={group.author + " " + group.date} style={{listStyleType:"square"}}>
                    {group.author + " " + 
                    new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(group.date.substring(0,10))))}
                </li>
            </ul>
            </p>)
        
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