import React, { useState } from 'react';
import addIcon from "../assets/add_box.svg";
function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function newTaskChange(e){
        setNewTask(e.target.value);
    }
    function addTask(e) {
        e.preventDefault();

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }  
    }

    return(
        <>
        
        <form className="taskForm" onSubmit={addTask}>
            <input
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={newTaskChange}
            />
            <button type="submit">
                <img src={addIcon} alt="Add Task" />
            </button>
        </form>
        <ol className="taskListContainer">
            {tasks.map((task, index) =>  (
                <li key={index}>
                    <input type="checkbox" />
                    <span className="text">{task}</span>
                </li>
            ))}
        </ol>


        </>
    );
}

export default Tasks;