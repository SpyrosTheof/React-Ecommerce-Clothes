import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/Shop/Shop'



class App extends React.Component {

  
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
