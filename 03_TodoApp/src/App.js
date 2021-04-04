import { useState, useEffect } from "react"
import './App.css';
import { TextField, IconButton } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo'
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // onSnapshot is a realtime listener
    const unsubscribe = db.collection("todos").orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )       // end of setTodos
      })        // end of onSnapshot

    return () => {
      unsubscribe()
    }

  }, [])


  const handleSubmitForm = (event) => {
    event.preventDefault()
    const newTodo = {
      text: input,
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    db.collection('todos').add(newTodo)
    setInput('')
  }

  return (
    <div className="app">
      <div className="app__wrapper">

        <h1 className="app__titleText">
          Hello React 💙
        </h1>

        <form onSubmit={handleSubmitForm} className="todo__form" autoComplete="off" >
          <TextField value={input} onChange={e => setInput(e.target.value)} id="standard-basic" fullWidth label="Type a Todo" />
          <IconButton disabled={!input} type='submit' >
            <AddIcon />
          </IconButton>
        </form>

        <div className="todo__Container">
          {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>

      </div>
    </div>
  );
}

export default App;
