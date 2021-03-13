import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//functional Component "RenderMenuItem" and "Menu" creation. Functional components only need to receive props from parent component to work, simplifies implementation in code

function RenderMenuItem({ dish, onClick }) {
  return(
    <Card onClick={() => onClick(dish.id)}> {/* need to remove this.props, since onClick Is now coming in as a variable instead of props from MainComponent */}

          {/* for this particular dish.id that is being rendered, once this particular "Card" object is being clicked (first blue colour "onClick"):
          pass the dish.id value to the onClick method that is being sent to MenuComponent from MainComponent.(the yellow coloured "onClick")
          onClick method being sent from MainComponent:  onClick={(dishId) => this.onDishSelect(dishId)} */}
              <CardImg wdith="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
  );
}

  const Menu= (props) => { /* props is the input, similar to function definition style on top, only syntax is different */

    const menu = props.dishes.map((dish) => { //need to remove this, since props is now an incoming variable to a functions rather than as props from MainComponent

      /*map is to iterate over each item in the js array; 
      dish is like python element loop iteration, each item is called 'dish', 
      and will do the following operation for each 'dish' object*/
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={props.onClick}/>
        </div>
      );
    });
  
      return (
        <div className="container">
          <div className="row">            
                {menu}              
          </div>        
          </div>
      ); 

  }



  export default Menu