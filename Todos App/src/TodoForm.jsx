import React, { useState } from 'react'

export default function TodoForm({onAddTodo}) {
    const [inputValue, setinputValue] = useState({});
    const handleInputChange = (value) =>{
        setinputValue({ id:value, content: value, checked:false });

    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        setinputValue({id: "" , content:" ", checked:false});
    }
  return (
    <section className='form'>
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" style={{color:"black"}} className='todo-input' autoComplete='off' value={inputValue.content} onChange={(e) =>{handleInputChange(e.target.value)}} />
      </div>
      <div>
        <button type='submit' className='todo-btn'>Add Task</button>
      </div>
    </form>
  </section>
 
  );
}


