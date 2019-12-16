import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from './context/AuthContext';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import LogIn from './pages/LogIn';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthContext >
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path = '/new-user' component={SignUp} />
          <Route exact path = '/log-in' component={LogIn} />
          <Route path = '/user-profile/' component={UserProfile} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </AuthContext>
  );
}

export default App;
