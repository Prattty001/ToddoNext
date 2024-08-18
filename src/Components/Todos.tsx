"use client";
import { useTodo } from '@/Store/tods';
import { useSearchParams } from 'next/navigation';

import React from 'react'

const Todos = () => {
    const {todos,toggleTodo,handleDelete} = useTodo();
    const searchParams = useSearchParams();
    const todofilter = searchParams.get('todos')
    let filtertodos = todos;

    if(todofilter==="active"){
        filtertodos=filtertodos.filter((todo)=>!todo.completed)
    }
    else if(todofilter=="completed"){
        filtertodos = filtertodos.filter((todo)=>todo.completed)
    }
  return (
    <ul>
{
    filtertodos.map((todo)=>{
return <li key={todo.id}>

    <input type="checkbox" name='' id={`todo- ${todo.id}`} checked={todo.completed} 
    onChange={()=>toggleTodo(todo.id)}
    />
    <label htmlFor={`todo- ${todo.id}`}>{todo.task}</label>
{
    todo.completed && (
        <button type='button' onClick={()=>handleDelete(todo.id)}>Delete</button>
    )
}
</li>
    })
}
    </ul>
  )
}

export default Todos
