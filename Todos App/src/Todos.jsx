import React, { useEffect, useState } from 'react'
import './App.css'

import { BiAt } from 'react-icons/bi';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import DateTime from './DateTime';
import { getLocalStorage, setLocalStorage } from './TodoLocalStrge';



export default function Todos() {


  const [task, setTask] = useState( ()=> getLocalStorage() 

  );
    
   
    const checkedTodo = (content) =>{
      
        const updatedTask = task.map((currValue) =>{
          if(currValue.content === content){
            return{ ...currValue, checked: !currValue.checked};
          }
          else{
            return currValue;
          }
        }

      );
      setTask(updatedTask);
    };

    const handleFormSubmit = (inputValue) =>{   
      const { id, content, checked} = inputValue; 
        if(!content) return
        
        const ifTdoMatch = task.find(
          (currValue) =>currValue===content
        );

        if(ifTdoMatch) return;

        setTask((preTask) => [...preTask, {id,content, checked}]);
        
        setLocalStorage(task);

    };


    const handleDelete = (value) =>{

      const updatedTask = task.filter((currValue) => currValue.content !== value);
      setTask(updatedTask);

    }

    const handleAllDel =() =>{
      setTask([]);

    }
    

 

    
  return (
    <>
    <section className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>
     <TodoForm onAddTodo={handleFormSubmit} />
      <section className='myUnOrdList'>
        <ul>
          {
            task.map((currValue) =>{
              return <TodoList key={currValue.id} data={currValue.content} checked={currValue.checked} onDelete={handleDelete} onCheckedTodo={checkedTodo} />

            })
          }
        </ul>

      </section>

      <section> 
        <button className='clear-btn' onClick={handleAllDel}> Clear All </button>
      </section>
    </section>
    </>
  )
}

