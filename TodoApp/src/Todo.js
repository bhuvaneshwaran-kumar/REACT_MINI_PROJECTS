import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function Todo({ todo, dispatch }) {

    const handleDeleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', payload: todo })
    }
    return (
        <div className="todo">
            <p>{todo.text}</p>
            <IconButton onClick={handleDeleteTodo} color="secondary" size="small">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Todo
