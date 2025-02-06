import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
export default function TodoList({ checked, onCheckedTodo, data, onDelete}) {
    
  return (
    <li className='todo-item'>
    <span className={checked ? "checkList" : "notCheckList" }>
      {data}
    </span>
      
    
    <button className='check-btn' onClick={()=> onCheckedTodo(data)}><IoMdCheckmarkCircle /> </button>  
    <button className='delete-btn' onClick={()=> onDelete(data)} ><MdDeleteForever /> </button>  
     
      
     </li>

  );
};
