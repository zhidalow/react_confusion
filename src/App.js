import './App.css';
import Main from './components/MainComponent';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() { //class...extends method must have render() {} structure inside
    return (

      //need to surround "MainComponent" to make react "sotre" js object available to all components
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/> 
            {/*calling in MainComponent (container component)*/}
          </div>
        </BrowserRouter>
      </Provider>      
    );
  }
}
export default App; //export must put outside of the 'component' code 
