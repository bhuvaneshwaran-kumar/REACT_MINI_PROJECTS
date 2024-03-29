import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav";
import BottomNav from "./components/nav/BottomNav";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setUser } from './actions/index'
import Home from './pages/Home'
import AssistedPurchase from './pages/AssistedPurchase'
import ShippingCalculator from './pages/ShippingCalculator'
function App() {

  const [loading, setLoading] = useState(true)

  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(user)
  }, [user])

  useEffect(() => {
    setLoading(true)
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
        if (data.ok) {
          dispatch(setUser(data.user))
        } else {
          dispatch(setUser(null))
        }
        setLoading(false);
      });
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="App">
      <Nav loading={loading} />
      <BottomNav loading={loading} />
      {
        !loading && (

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/assisted-purchase' exact>
              <AssistedPurchase />
            </Route>
            <Route path='/shipping-calculator' exact>
              <ShippingCalculator />
            </Route>

            <Route path="/auth/login" >
              <Login />
            </Route>
            <Route path="/auth/signup">
              <SignUp />
            </Route>
            <Route path='/*'>
              404
            </Route>
          </Switch>
        )
      }
    </div >
  );
}

export default App;
