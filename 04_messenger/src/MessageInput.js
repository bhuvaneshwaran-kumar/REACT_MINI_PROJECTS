import React, { useState } from 'react'
import { db, getTimestamp } from './firebase'

function MessageInput({ user }) {
    const [input, setInput] = useState('')

    const sendMessage = (event) => {
        event.preventDefault()
        if (input) {
            db.collection('messages').add({
                user: user,
                text: input,
                timestamp: getTimestamp()
            })
            setInput('')
        }
    }

    return (
        <form className="w-100 d-flex align-items-center mb-1" style={{ maxWidth: "600px" }} >

            <input value={input} onChange={e => setInput(e.target.value)}
                type="text" className="form-control" placeholder="Type a message" autoFocus />

            <button onClick={sendMessage} type="submit" className="btn btn-primary ml-2">
                SEND
            </button>

        </form>
    )
}

export default MessageInput
