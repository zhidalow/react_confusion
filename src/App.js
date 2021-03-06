import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu /> {/*calling in Menu component */}
    </div>
  );
}

export default App;
