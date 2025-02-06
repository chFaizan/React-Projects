import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, clearAllTask, fetchTask } from "../Store";

export default function Todo() {
    const [task, setTask] = useState("");
    const tasks = useSelector((state) => state.task); 
    const dispatch = useDispatch();

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!task.trim()) {
            alert("Task cannot be empty.");
            return;
        }
        dispatch(addTask(task));
        setTask("");
    };

    const handleDelete = (id) => dispatch(deleteTask(id));
    const handleClearAll = () => dispatch(clearAllTask());
    const handleFetchData = () => dispatch(fetchTask());

    return (
        <div className="container">
            <div className="todo-app">
                <h1>Todo List</h1>

                <form onSubmit={handleAddTask}>
                    <input
                        type="text"
                        placeholder="Add a new Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit">Add Task</button>
                </form>

                <button onClick={handleFetchData} style={{marginLeft:"-30rem" , marginTop: "10px" }}>
                    Fetch Data
                </button>

                <ul>
                    {tasks.map((curTask, index) => (
                        <li key={index}>
                            {curTask}
                            <MdDeleteForever onClick={() => handleDelete(index)} />
                        </li>
                    ))}
                </ul>

                <button onClick={handleClearAll} style={{marginTop: "10px" }}>
                    Clear All
                </button>
            </div>
        </div>
    );
}
