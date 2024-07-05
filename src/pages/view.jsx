import Task from "../components/task"
import { URL } from "../assets/backendURL"
import { useState, useEffect } from "react"
import axios from "axios"
import { getAllTasks } from "../services/api-call.js"

const View = ()=>{

    let tasksArray; 
    const [tasks, setTasks] = useState([]);

    useEffect( ()=>{
        const allTasksResponse = async () => {
            const allTasks = await getAllTasks()            
            setTasks(allTasks.data)            
        }         
        allTasksResponse();     
    },[])
        

    if(tasks.length !==0){            
        tasksArray = tasks.map((eachTask)=>{
            return (
            <Task 
                key={eachTask._id} 
                _id={eachTask._id}
                title={eachTask.title}
                description={eachTask.description}
                dueDate={eachTask.dueDate}
            />
            )
        })
    }
    
    return(
        <>
                {
                    tasks.length === 0 ?
                     
                    <div>
                        <span id="ProgressLabel" className="sr-only">Loading</span>

                        <span
                            role="progressbar"
                            aria-labelledby="ProgressLabel"
                            aria-valuenow="75"
                            className="block rounded-full bg-gray-200"
                            >
                        <span className="block h-3 rounded-full bg-indigo-600 w-3/4" ></span>
                        </span>
                    </div> 
                    
                    : tasksArray
                }
        </>
    )
}

export default View