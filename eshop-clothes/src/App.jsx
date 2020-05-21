import React from 'react';
import HomePage from './Pages/HomePage';
import {Route,Switch} from 'react-router-dom'
import './App.css';


const HatsPage=()=>{
  return <div>
    Welcome to hat page
  </div>
}
class App extends React.Component {

  
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/hats" component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
