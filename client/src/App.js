import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Advices from "./pages/Advices";
import Chats from "./pages/Chats";
import DoctorProfile from "./components/DoctorProfile";
import UserProfile from "./components/UserProfile";
import Services from "./pages/Services";
import Setting from "./components/Setting";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/advices">
          <Advices />
        </Route>

        <Route exact path="/chats">
          <Chats />
        </Route>

        <Route exact path="/doctorprofile">
          <DoctorProfile />
        </Route>

        <Route exact path="/userprofile">
          <UserProfile />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>

        <Route exact path="/setting">
          <Setting />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
