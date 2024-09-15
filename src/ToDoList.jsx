import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat", "Shower", "Walk dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function handleAddTask(){
        if (newTask.trim() !== ""){
            setTasks([...tasks, newTask])
            setNewTask("")
        }
        

    }

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function handleMoveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
        
    }

    function handleMoveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }




    return <div className="container">
        <h1>To-Do-List</h1>
        <div className="input">
            <input type="text" placeholder="Add a task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-task" onClick={handleAddTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) => <li>
                <span className="task">{task}</span>
                <button className="delete" onClick={()=>handleDeleteTask(index)}>🚮</button>
                <button className="move-up" onClick={() => handleMoveTaskUp(index)}>☝</button>
                <button className="move-down" onClick={()=>handleMoveTaskDown(index)}>👇</button>
            </li>)}
        </ol>
        
    </div>

}

export default ToDoList