//Making MainComponent as the container componenent where all the rendering takes place 

/*import './App.css';*/ //no need styles; MainComponent.js is to function as just a container component (styles will be in presenational component)
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes'; //"../" means go up one level in folder directory. in this case will land on src, then find "shared" folder then "dishes" file
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import { Component } from 'react';
import Home from'./HomeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) { //rmb only class objs can use state 
    super(props);

    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }
  

  render() { //class...extends method must have render() {} structure inside

    //defining the functinoal component "HomePage"      
    const HomePage = () => {
        return(

          //extract out featured item (only one item will have featured = true). Subarray returned, still need [0] to convert to js object to pass
          //RHS of (dish) => dish.featured is the boolean condition, LHS is the object you want to be returned
          //IMPT NOTE: array slicing only takes place after filter is complete i.e put [0] outside of filter code
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
              promo={this.state.promotions.filter((promo) => promo.featured)[0]} 
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    return (
      <div>
        <Header />
        <Switch>

            {/* these paths are web address paths eg. facebook.com/dumbass123/profile */}
            <Route path="/home" component={HomePage} />

            {/* need to define in line functional component so that can pass props to "MenuComponent" */}
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />

            <Route exact path="/contactus" component={Contact} />

            {/* "Redirect" is for default path in case the path does not match any single one of the "Routes" path */}
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main; //export must put outside of the 'component' code 