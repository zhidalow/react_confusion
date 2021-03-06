import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';


class Menu extends Component { //component name is menu
    constructor(props) {
        super(props); //follow until here for basic template for creating a typical React component
        this.state = { //only class componenets can store state info
            selectedDish:null
        }
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount() {
      console.log('Menu Component componentDidMount is invoked')
    }

    onDishSelect(dish) {
      this.setState({selectedDish:dish}); //rmb to alw use setState to change state value
    }

    
    render() {
        const menu = this.props.dishes.map((dish) => { 
          /*map is to iterate over each item in the js array; 
          dish is like python element loop iteration, each item is called 'dish', 
          and will do the following operation for each 'dish' object*/
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1"> {/*m-1 is 1u margin all around*/}
              {/*mt-5 is top margin of, every item given a unique element id [compulsory for React?] (good practice for list objects). 
              unique id useful for React to update any changes made. Curly braces means js object */}            
                <Card onClick={() => this.onDishSelect(dish)}> {/* 'this' is pointing to the current 'dish' object card; passing the current selected dish to 'onDishSelect' function*/}
                   <CardImg wdith="100%" src={dish.image} alt={dish.name} />
                   <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log('Menu Component render is invoked')

        return (
          <div className="container">
            <div className="row">            
                  {menu}              
            </div>
            
              <DishDetail selectedDish={this.state.selectedDish}/>
           
          </div>
        );
    }
}

export default Menu;