import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component { //component name is menu

  //this chunk is to demo lifecycle components and shoes the order in which the components render/mount changes to DOM 

    /*constructor(props) {
        super(props); //follow until here for basic template for creating a typical React component
        
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount() {
      console.log('Menu Component componentDidMount is invoked')
    }*/
    
    render() {
        const menu = this.props.dishes.map((dish) => { 
          /*map is to iterate over each item in the js array; 
          dish is like python element loop iteration, each item is called 'dish', 
          and will do the following operation for each 'dish' object*/
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}> 
                {/* for this particular dish.id that is being rendered, once this particular "Card" object is being clicked (first blue colour "onClick"):
                pass the dish.id value to the onClick method that is being sent to MenuComponent from MainComponent.(the yellow coloured "onClick")
                onClick method being sent from MainComponent:  onClick={(dishId) => this.onDishSelect(dishId)} */}
                   <CardImg wdith="100%" src={dish.image} alt={dish.name} />
                   <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        //this chunk is to demo lifecycle components and shoes the order in which the components render/mount changes to DOM 

        //console.log('Menu Component render is invoked')

        return (
          <div className="container">
            <div className="row">            
                  {menu}              
            </div>        
            </div>
        );
    }
}

export default Menu;