import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import db from './firebase'
function Todo({ todo }) {

    const handleDeleteTodo = () => {
        db.collection('todos').doc(todo.id).delete()
    }

    const handleCompleteTodo = () => {
        db.collection('todos').doc(todo.id).update({
            completed: !todo.data.completed
        })
    }

    return (
        <div className={todo.data.completed ? 'todo completed' : 'todo'} onClick={handleCompleteTodo}>
            <p>{todo.data.text}</p>
            <IconButton onClick={handleDeleteTodo} color="secondary" size="small">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Todo
