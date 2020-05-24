import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/SignIn-SignUpPage/signIn-signUpPage';
import {auth,createUserProfileDocument} from './Firebase/firebase';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribefromAuth=null;
  componentDidMount(){
    this.unsubscribefromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot)=>{
          this.setState({currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }},()=>{
            console.log(this.state.currentUser)
          })
        })

      }

      else{
        this.setState({currentUser:userAuth})
      }
  })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header user={this.state.currentUser}/>
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
