import React, { useRef, useState } from 'react'
import "../css/Auth.css";

function SignUp() {

    const formRef = useRef()

    const [message, setMessage] = useState('')

    const handleSignup = async (e) => {
        setMessage('')
        e.preventDefault();
        const payLoad = {
            email: formRef.current.email.value,
            password: formRef.current.password.value,
            username: formRef.current.name.value
        }
        const response = await fetch(`http://localhost:8080/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            },
            body: JSON.stringify(payLoad)
        })
        const data = await response.json()
        setMessage(data.message)

    }

    return (
        <div className="kauth__outer">
            <div className="kauth__inner">
                <h2>Welcome To Kartiyo.</h2>
                <form className="kauth__form" onSubmit={handleSignup} ref={formRef}>
                    <div className="kauth__form_row">
                        <label htmlFor="email">Username :</label>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>
                    <div className="kauth__form_row">
                        <label htmlFor="name">Name :</label>
                        <input type="text" id="name" placeholder="Name" />
                    </div>
                    <div className="kauth__form_row">
                        <label htmlFor="password">Password :</label>
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <div className="kauth__inner_action">
                        <button>Sign Up</button>
                    </div>
                </form>
                <p>{message && message}</p>
            </div>
        </div>
    )
}

export default SignUp
