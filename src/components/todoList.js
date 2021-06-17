import React,{useState} from 'react';
import Todo from './todo';
import TodoForm from './todoForm';

export default function TodoList(){
    const [todos , setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){  // this line is defined here because when the user will feed only space to add in todo this will reject the only spaces case
            return;
        }

        const newTodo = [todo , ...todos]

        setTodos(newTodo);
        console.log(newTodo)
    }

    const updateTodo = (todoId ,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id ===todoId ? newValue:item )))
    }



    /* this piece of code we did not write in todo.js because when removeTodo will check after the click that the id we have 
    clicked is belonges to the todoList.js and not to todo.js so it has to update the todoList.js */

    const removeTodo = id =>{
        const removeValue = [...todos].filter(todo => todo.id !== id)
        setTodos(removeValue)
    }

    const completeTodo = id => {
        let updatedTodos= todos.map(todo =>{
            if(todo.id === id){
            todo.isComplete = !todo.isComplete;
        }
        return todo;
        })
        setTodos(updatedTodos)
    }
    return(
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}