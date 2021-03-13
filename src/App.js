import './App.css';
import Main from './components/MainComponent';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() { //class...extends method must have render() {} structure inside
    return (
      <BrowserRouter>
        <div>
          <Main/> 
          {/*calling in MainComponent (container component)*/}
        </div>
      </BrowserRouter>      
    );
  }
}
export default App; //export must put outside of the 'component' code 
