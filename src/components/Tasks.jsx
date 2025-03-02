import React, { useState } from 'react';
import addIcon from "../assets/add_box.svg";
function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function newTaskChange(e){
        setNewTask(e.target.value);
    }
    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    return(
        <>
        
        <div className="taskContainer">
            <input
                type="text"
                placeholder="Add a task... (max 3)"
                value={newTask}
                onChange={newTaskChange}
            />
            <img onClick={addTask} src={addIcon} />
        </div>
        <ol className="taskListContainer">
            {tasks.map((task, index) =>  (
                <li key={index}>
                    <span className="text">{task}</span>
                </li>
            ))}
        </ol>


        </>
    );
}

export default Tasks