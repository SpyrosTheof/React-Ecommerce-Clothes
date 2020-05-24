import React from 'react';
import './signIn-signUpPage.scss';
import SignIn from '../../Components/Signin/signin';
import SignUp from '../../Components/Sign-up/sign-up'

const SignInAndSignUpPage=()=>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;