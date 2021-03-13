import './App.css';
import Main from './components/MainComponent';
import { Component } from 'react';

class App extends Component {

  render() { //class...extends method must have render() {} structure inside
    return (
      <div>
        <Main/> 
        {/*calling in MainComponent (container component)*/}
      </div>
    );
  }
}
export default App; //export must put outside of the 'component' code 
