import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes'; //'./' roughly means to look for a folder with *foldername*, then look in folder with *filename*
import { Component } from 'react';

class App extends Component {
  constructor(props) { //rmb only class objs can use state 
    super(props);

    this.state={
      dishes: DISHES
    };
  }
  render() { //class...extends method must have render() {} structure inside
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/> 
        {/*calling in Menu component + passing dishes state info as props to Menu component*/}
      </div>
    );
  }
}
export default App; //export must put outside of the 'component' code 
