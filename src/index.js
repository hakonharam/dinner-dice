
import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ChangeColor from './components/change-color.js'; 
import Roller from './components/Roller.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
  

class App extends Component { 
    render() 
    { 
        return (
        
            <div className="App">
            <header className="App-header">

                {
                //<img src={logo} className="App-logo" alt="logo" style={{width: 50,height:50}}/>
                }
                <p>
                    <Roller>Roll</Roller>
                </p>
            </header>
          </div>
        ); 
    } 
} 


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
