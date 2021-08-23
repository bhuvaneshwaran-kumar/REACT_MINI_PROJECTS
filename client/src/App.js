import { useEffect } from "react";
import Nav from "./components/nav/Nav";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setUser } from './actions/index'
function App() {


  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/refresh", {
      method: "POST",
      headers: {
        'accept': 'application/json'
      },
      credentials: 'include',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setUser(data.user))
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/auth/login" >
          <Login />
        </Route>
        <Route path="/auth/signup">
          <SignUp />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
