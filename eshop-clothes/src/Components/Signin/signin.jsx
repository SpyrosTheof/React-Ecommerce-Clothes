import React from 'react';
import './signin.scss';
import FormInput from '../Form-Input/form-input';
import CustomButton from '../Custom-Button/custom-button';
import {auth,signInWithGoogle} from '../../Firebase/firebase';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }
    
    handleSubmit=async (event)=>{

        event.preventDefault()
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password) ;
            this.setState({email:"",password:""})
        } catch (error) {
            alert(error);
        }
        
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})   
    }
  
    render(){

        return <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign-in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="email" />
                <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="password" />
                <div className="buttons">
                <CustomButton type="submit" >Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Google Sign In</CustomButton>
                </div>
            </form>

        </div>
    }
}

export default SignIn;