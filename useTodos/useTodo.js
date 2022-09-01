import { useEffect, useReducer } from "react";
import { todoReducer } from "./";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []
}

export const useTodo = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, [], init )
    
    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [ todos ] )

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatch( action )
    }

    const onDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] REMOVE TODO',
            payload: id
        }
        dispatch( action )
    }
    
    const onToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] TOGGLE TODO',
            payload: id
        }
        dispatch( action )
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(( todo ) => todo.isDone !== true ).length,
        handleNewTodo,
        onDeleteTodo,
        onToggleTodo,
    }
}
