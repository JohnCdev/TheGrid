import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from './context/AuthContext';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AuthContext >
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path = '/new-user' component={SignUp} />
          <Route exact path = '/log-in' component={LogIn} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </AuthContext>
  );
}

export default App;
