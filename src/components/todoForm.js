import React,{useState} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value:'')

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit?(<div>
                    <input type="text" placeholder="Update a Todo" value={input} onChange={e=>{setInput(e.target.value)}} className="todo-input edit" />
                <button className="todo-button edit">Update</button>
                </div>) : (<div>
                    <input type="text" placeholder="Add a todo" value={input} onChange={e=>{setInput(e.target.value)}} className="todo-input" />
                <button className="todo-button">Add Todo</button>
                </div>)}
            </form>
        </div>
    )
}

export default TodoForm
