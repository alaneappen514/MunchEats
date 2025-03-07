import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login";
import Signup from "./Signup";

const Parse = require('parse/node')

Parse.initialize('JalVFLmjJDUBqZ0hN9FyYbhbv2LHAaPIPLbKTuPp','2XXaKQbVcvXoq0XxyjCIhetuwv2dmoWTNVU4kDG6')
Parse.serverURL = 'https://parseapi.back4app.com'




function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
