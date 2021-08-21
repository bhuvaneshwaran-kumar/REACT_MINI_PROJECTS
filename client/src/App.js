import { useEffect } from "react";
import Nav from "./components/nav/Nav";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { Switch, Route } from 'react-router-dom'
function App() {



  useEffect(() => {
    fetch("http://localhost:8080/api/auth")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/auth/login" exact="true">
          <Login />
        </Route>
        <Route path="/auth/signup" exact="true">
          <SignUp />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
