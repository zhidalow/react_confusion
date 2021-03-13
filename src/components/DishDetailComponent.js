import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from 'reactstrap';


class DishDetail extends Component {

renderDish (selectedDish) {
    if (selectedDish != null) {
        return(
            <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
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

rendercomments (selectedDish) {
    
    if (selectedDish != null) {
    
    const listitems = selectedDish.comments.map((group) => {/*variable included inside the function, that's why got double brackets at the start*/
            return (
       
            <p style={{fontSize:14}}>
            <p key={group.comment}>
                {group.comment}
            </p> 
            <ul style={{paddingLeft:"20px"}}>
                <li key={group.author + " " + group.date} style={{listStyleType:"square"}}>
                    {group.author + " " + group.date.substring(0,10)}
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
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.rendercomments(this.props.selectedDish)}
                </div>
            </div>
        )
        
      
    }
}
export default DishDetail;