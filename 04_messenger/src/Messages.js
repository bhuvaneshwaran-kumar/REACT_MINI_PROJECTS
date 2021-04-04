import React, { useState, useRef, useEffect } from 'react'
import { db } from './firebase'

function Messages({ user }) {
    const [messages, setMessages] = useState([])
    const messageRef = useRef()

    useEffect(() => {
        // Real Time listener
        const unsubcribe = db.collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(25)                  // get the last 25 messages
            .onSnapshot(snapshot => {
                const latestMessages = snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))

                latestMessages.reverse()      // reverse will make sure new messages are showed in the bottom of the screen
                setMessages(latestMessages)

                // Scroll to the bottom of messages Container automatically everytime when a message gets added
                messageRef.current.scrollIntoView({ behavior: "smooth" })
            })

        return unsubcribe      // stop listening to firestore changes when the component is unmounted

    }, [])

    return (
        <div className="messages">
            {     // Individual Message
                messages.map(({ id, data }) => (
                    <div key={id} className={`message ${(data.user === user) && 'bg-primary text-white ml-auto'}`}>

                        {!(data.user === user) &&
                            <small className="font-weight-bold"> {data.user} </small>}

                        <p className="m-0"> {data.text} </p>
                    </div>
                ))
            }

            <div ref={messageRef} />
        </div>
    )
}

export default Messages
