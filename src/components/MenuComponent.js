import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

//functional Component "RenderMenuItem" and "Menu" creation. Functional components only need to receive props from parent component to work, simplifies implementation in code

function RenderMenuItem({ dish }) {
  return(
    <Card>
      
      {/* backquotes since link params only allows url input. within backquotes is js obj. ${} is template literal */}
      {/* when clicking on each "Card" object, will link to "to={`/menu/${dish.id}`}". Then will run through Route in "MainComponent"
      <Route path="/menu/:dishId" component={DishWithId} /> will only fulfil for this Route path. Finally, {dish.id} info is sent as params.dishId through Route parameters to DishWithId functional component */}
      <Link to={`/menu/${dish.id}`}>
              <CardImg wdith="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>

      </Link> 
      </Card>
  );
}

  const Menu= (props) => { /* props is the input, similar to function definition style on top, only syntax is different */

    const menu = props.dishes.dishes.map((dish) => { //need to remove "this", since props is now an incoming variable to a functions rather than as props from MainComponent

      /*map is to iterate over each item in the js array; 
      dish is like python element loop iteration, each item is called 'dish', 
      and will do the following operation for each 'dish' object*/
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });

    if (props.dishes.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    else  
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/home'>Home</Link>
              </BreadcrumbItem>

              <BreadcrumbItem active>
                Menu
              </BreadcrumbItem>
            </Breadcrumb>

            <div className="col-12">
              <h3>Menu</h3>
              <hr /> {/* hr is horizontal rule: horizontal line*/}
            </div>
          </div>
          
          <div className="row">            
                {menu}              
          </div>        
          </div>
      ); 

  }



  export default Menu