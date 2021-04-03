//Making MainComponent as the container componenent where all the rendering takes place 

/*import './App.css';*/ //no need styles; MainComponent.js is to function as just a container component (styles will be in presenational component)
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Component } from 'react';
import Home from'./HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


//converting reduxStore's state into props that will be available for use in MainComponent which will pass to all other components
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }  
}

//need to call as a function similar to "mapStateToProps"
const mapDispatchToProps = (dispatch) => {

  return {
    //"addComment" is an action creator. returns a curried function, where "addComment" input has 4 variables (dishId, rating, author, comment)
    //dispatch method needs "ActionCreator" params to send values to Redux store
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  }
}

class Main extends Component {

  //when "MainComponent" being mounted into view (by react application), at the point after it gets mounted, 
  //fetchDishes will be called, dishes info will be fetched and loaded into redux store, and dishes is then made available to "MainComponent"
  //calling fetchDishes() thunk here (mini async function, rest of Components will still load while fetching dish info from Redux store)
  componentDidMount() {
    this.props.fetchDishes();
  }
  
  render() { //class...extends method must have render() {} structure inside

    //defining the functinoal component "HomePage"      
    const HomePage = () => {
        return(

          //extract out featured item (only one item will have featured = true). Subarray returned, still need [0] to convert to js object to pass
          //RHS of (dish) => dish.featured is the boolean condition, LHS is the object you want to be returned
          //IMPT NOTE: array slicing only takes place after filter is complete i.e put [0] outside of filter code
            <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess} 
              promo={this.props.promotions.filter((promo) => promo.featured)[0]} 
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({match}) => {
      return(
        
        //parseInt(match.params.dishId,10) : parseInt converts string to int, 2nd param is what base (base 10 usually)
        //match.params where "params" contains all key-value pairs (like a dictionary)
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
        
        //passing addComment as props ("addComment" converted to props by "mapDispatchtoProps" function). Pass the "addComment" function to "DishDetail" component,
        //where the user inputs their feedback of the food 
        addComment={this.props.addComment} />
      );

    }

    return (
      <div>
        <Header />
        <Switch>

            {/* these paths are web address paths eg. facebook.com/dumbass123/profile */}
            <Route path="/home" component={HomePage} />

            {/* need to define in line functional component so that can pass props to "MenuComponent" */}
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />

            {/* ":" passes whatever is after the ":" as a token with 3 props: "match","location" and "history" */}
            <Route path="/menu/:dishId" component={DishWithId} />

            <Route exact path="/contactus" component = {() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />

            {/* implementing "Route" for aboutus page */}
            <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />

            {/* "Redirect" is for default path in case the path does not match any single one of the "Routes" path */}
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// "connect" first input is mapStateToProps, will call the function and pass it to "MainComponent" as props.
//Similar case for "mapDispatchToProps", adding it to "connect" params here makes the props available for use in "MainComponent"
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 