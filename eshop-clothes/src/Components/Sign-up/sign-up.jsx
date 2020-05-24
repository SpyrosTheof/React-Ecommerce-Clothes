import React from 'react';
import FormInput from '../Form-Input/form-input';
import CustomButton from '../Custom-Button/custom-button';
import {auth,creatUserProfileDocument, createUserProfileDocument} from '../../Firebase/firebase';
import './sign-up.scss';

class SignUp extends React.Component{
    constructor(props){
        super();

        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("Password and confirm password must match");
            return;
        }

        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
           await  createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
            
        } catch (error) {
            
            console.error(error)
        }
    }

    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}=event.target;
        this.setState({
            [name]:`${value}`
        },()=>{
            console.log(this.state)
        })
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;

        return <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                />
                   <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
                />
                     <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="password"
                required
                />
                   <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
                />
                <CustomButton type="submit">
                    SIGN UP
                </CustomButton>
              
            </form>
        </div>
    }

}
export default SignUp;




