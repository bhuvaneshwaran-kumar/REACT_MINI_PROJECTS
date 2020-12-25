import { useState, useReducer } from "react"
import './App.css';
import { TextField, IconButton } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo'

function App() {
  const [input, setInput] = useState('')
  const intialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todos: [action.payload, ...state.todos] }
      case 'DELETE_TODO':
        return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id) };
      default:
        return state;
    }
  }


  const handleSubmitForm = (event) => {
    event.preventDefault()
    if (!input) return
    const newTodo = { text: input, id: new Date().getTime(), completed: false }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
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
          <IconButton type='submit' >
            <AddIcon />
          </IconButton>
        </form>

        <div className="todo__Container">
          {state.todos.map((todo) => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
        </div>

      </div>
    </div>
  );
}

export default App;
