import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {FacebookAuthProvider } from "firebase/auth";
import { auth } from '../firebase'
import { getAuth, } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import Input from './Input';
import './auth.css'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };
// GOOGLE AUTH PROVIDER
const provider = new GoogleAuthProvider();
const windowSign=()=>{
    signInWithPopup(auth,provider )
    .then((data) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const result =data.user;
    const token =credential.accessToken;
    dispatch({ type: AUTH, data: { result, token } });
    
    history.push('/');
    
    
    // The signed-in user info.

}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    }); 
}
// FACEBOOK LOGIN
const providerbook = new FacebookAuthProvider();
const facebook =()=>{
const auth = getAuth();
signInWithPopup(auth, providerbook)
.then((data) => {
// This gives you a Facebook Access Token. You can use it to access the Facebook API.
const credential = FacebookAuthProvider.credentialFromResult(result);
const result =data.user;
const token =credential.accessToken;
dispatch({ type: AUTH, data: { result, token } });

history.push('/');


// The signed-in user info.

// ...
})
.catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = FacebookAuthProvider.credentialFromError(error);

// ...
}); 
}
// TWITTER LOGIN
const providertwitter = new TwitterAuthProvider();
const twitter = ()=>{
const auth = getAuth();
signInWithPopup(auth, providertwitter)
.then((data) => {
// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
// You can use these server side with your app's credentials to access the Twitter API.
const credential = TwitterAuthProvider.credentialFromResult(result);
const result =data.user;
const token =credential.accessToken;
dispatch({ type: AUTH, data: { result, token } });


history.push('/');

}).catch((error) => {
console.error(error,"bad request")
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = TwitterAuthProvider.credentialFromError(error);
// ...
});
}
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
    <div className='main_component'>
        <Avatar className="">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className="" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className="">
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
         <div className='Providers'>
             <div className='button_nav'>
               <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
               <p onClick={windowSign}>Sign in With Google</p>
               </div>
               <div className='button_nav'>
                 <img src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"/>
               <p onClick={facebook}>Sign in With facebook</p>
               </div>
               <div className='button_nav'>
              <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"/>
               <p onClick={twitter}>Sign in With Twitter</p>
               </div>
              </div>
        
          <Grid container justify="flex-end">
            <Grid item>
              <Button className='font_color' onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
        </div>
    </Container>
  );
};

export default Auth;
