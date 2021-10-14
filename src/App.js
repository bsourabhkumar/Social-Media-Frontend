import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserProfile from "./components/UserProfile";
import { AuthContext } from "./context/AuthContext";
import {useContext} from "react";
import Messenger from "./pages/Messenger";

function App() {
  const {user} = useContext(AuthContext);
  return (
   <Router>
     <Switch>
       <Route exact path="/">
          {user ? <HomePage /> : <LoginPage />}
       </Route>
       <Route exact path="/login">
          {user ? <Redirect to="/" /> : <LoginPage />}
       </Route>
       <Route exact path="/register">
       {user ? <Redirect to="/" /> : <RegisterPage />}
       </Route>
       <Route exact path="/chat">
         {!user ? <Redirect to="/" /> : <Messenger />}
       </Route>
       <Route exact path="/profile/:username">
          {user ? <UserProfile /> : <LoginPage />}
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
