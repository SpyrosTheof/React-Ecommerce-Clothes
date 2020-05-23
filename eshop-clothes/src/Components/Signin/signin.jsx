import React from 'react';
import './signin.scss';
import FormInput from '../Form-Input/form-input';
import CustomButton from '../Custom-Button/custom-button'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }
    
    handleSubmit=(event)=>{

        event.preventDefault()

        this.setState({email:"",password:""})
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
                <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
            </form>

        </div>
    }
}

export default SignIn;