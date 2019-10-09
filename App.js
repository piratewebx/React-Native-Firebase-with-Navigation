import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoading from './Components/AuthLoading'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import TestHome from './Components/TestHome'

import firebase from "react-native-firebase";
import app from "firebase/app";

global.firebase = firebase;

const config = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  databaseURL: "DBURL",
  projectId: "PROJECTID",
  storageBucket: "BUCKET",
  messagingSenderId: "MSGSENDERID",
  appId: "APPID"
};

app.initializeApp(config);

console.log("App.js ...........");
console.log(app);


// This Stack is to be used after Authentication
const AppStack = createStackNavigator(
  { 
    Home: Home,
    TestHome: TestHome
  },
  {
    initialRouteName: 'Home',
  }
 );

// This is an app stack for authentication
const AuthStack = createStackNavigator(
  { 
    SignUp: SignUp,
    Login: Login 
  },
  {
    initialRouteName: 'Login',
  }
);

// App Stack switch
const AuthStackNav = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
);

const AppContainer = createAppContainer(AuthStackNav);

 export default class App extends React.Component {
   render(){
     return <AppContainer />
   }
 }