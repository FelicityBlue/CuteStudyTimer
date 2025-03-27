import React, { useState } from 'react';
import "./Tasks.css"
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
        <div className="taskContainer">
        <form className="taskForm" onSubmit={addTask}>
            <input
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={newTaskChange}
                className="taskInput"
            />
        </form>

        <ol className="taskListContainer">
            {tasks.map((task, index) =>  (
                <li key={index} className="taskItem">
                    <input type="checkbox" className="taskCheckbox" />
                    <span className="taskText">{task}</span>
                </li>
            ))}
        </ol>
        </div>


        </>
    );
}

export default Tasks;