import React, { useState } from 'react'
import './App.css'
import Login from './Login'
import Messages from './Messages'
import MessageInput from './MessageInput'


function App() {
  const [user, setUser] = useState('')


  return (
    <div className="app">

      {
        user ? (
          <>
            <div className="app__header">
              <h2 className="text-center font-weight-light">Messenger App</h2>
              <p className="text-center text-muted ">Welcome {user}</p>
            </div>

            <Messages user={user} />

            <MessageInput user={user} />

          </>
        ) : (
            <Login setUser={setUser} />
          )}


    </div>
  )
}

export default App
