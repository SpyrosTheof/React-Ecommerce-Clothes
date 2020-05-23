import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/SignIn-SignUpPage/signIn-signUpPage'



class App extends React.Component {

  
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
