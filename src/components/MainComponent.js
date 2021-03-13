//Making MainComponent as the container componenent where all the rendering takes place 

import {Navbar, NavbarBrand} from 'reactstrap';
/*import './App.css';*/ //no need styles; MainComponent.js is to function as just a container component (styles will be in presenational component)
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes'; //"../" means go up one level in folder directory. in this case will land on src, then find "shared" folder then "dishes" file
import { Component } from 'react';

class Main extends Component {
  constructor(props) { //rmb only class objs can use state 
    super(props);

    this.state={
      dishes: DISHES,
      selectedDish: null //adding in new state element to track which is the selectedDish 
    };
  }
  
    onDishSelect(dishId) {
        this.setState({selectedDish:dishId}); //rmb to alw use setState to change state value
    }

  render() { //class...extends method must have render() {} structure inside
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} 
        onClick={(dishId) => this.onDishSelect(dishId)}/> {/*calling in Menu component + passing dishes state info as props to Menu component*/}
        {/*onClick method takes the dish.id value retuned from MenuComponent to set new state for selectedDish though onDishSelect function.
        In explicit terms, this line is passing a prop called "onClick" to the MenuComponent from the MainComponent*/}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> 
        {/*"filter" function returns a subarray "dish" of those items in "dishes" that fulfils the following boolean test. need to supply index since array*/}
        
      </div>
    );
  }
}
export default Main; //export must put outside of the 'component' code 