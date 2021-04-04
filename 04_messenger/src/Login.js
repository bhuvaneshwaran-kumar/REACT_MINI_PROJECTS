import React, { useState } from 'react'

function Login({ setUser }) {
    const [input, setInput] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (input)
            setUser(input.toLowerCase())
    }

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col shadow-sm py-4 px-3" style={{ minWidth: "300px" }}>

                <center>
                    <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" alt="" />
                </center>

                <form onSubmit={handleLogin} className="mt-5">
                    <input value={input} onChange={(e) => setInput(e.target.value)}
                        type="text" className="form-control" placeholder="Enter your name" required />

                    <button className="btn btn-primary btn-block mt-3 btn-sm">SIGN IN</button>
                </form>

            </div>
        </div>
    )
}

export default Login
