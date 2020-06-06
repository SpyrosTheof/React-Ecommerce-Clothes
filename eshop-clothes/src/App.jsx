import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/SignIn-SignUpPage/signIn-signUpPage';
import {auth,createUserProfileDocument} from './Firebase/firebase';
import {setCurrentUser} from './Redux/User/user.actions';
import {connect} from 'react-redux';




class App extends React.Component {

  unsubscribefromAuth=null;
  
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribefromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot)=>{
          setCurrentUser({id:snapshot.id,...snapshot.data()})

        })

      }

      else{
        setCurrentUser(userAuth)
      }
  })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>}/>
        </Switch> 
      </div>
    );
  }
}
const mapStateToProps=({user})=>(
  {
    currentUser:user.currentUser
  }
)
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
