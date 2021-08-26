import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setUser } from '../actions/index'

import "../css/Auth.css";
function Login() {

  const formRef = useRef()
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const history = useHistory()

  useLayoutEffect(() => {
    if (user) return history.replace('/')
  }, [user])

  const handleLogIn = async (e) => {
    e.preventDefault();
    const payload = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    }
    const response = await fetch(`http://localhost:8080/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    if (data.ok) {
      // alert('user logged in successfully')
      // console.log(data)
      dispatch(setUser(data.data))
      history.replace('/')
    } else {
      setMessage(data.message)
    }

  }

  return (
    <div className="kauth__outer">
      <div className="kauth__inner">
        <h2>Log in to your Account</h2>
        <form className="kauth__form" ref={formRef} onSubmit={handleLogIn}>
          <div className="kauth__form_row">
            <label htmlFor="email">Username :</label>
            <input type="email" id="email" name='email' placeholder="Email" />
          </div>
          <div className="kauth__form_row">
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <div className="kauth__inner_action">
            <button>LOGIN</button>
            <span>Forgot Password?</span>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
