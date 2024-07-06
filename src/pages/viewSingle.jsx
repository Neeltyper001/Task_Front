import React from 'react';
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSingleTask,deleteTask } from '../services/api-call.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


const ViewSingle = ()=>{
    const { id } = useParams();
    const [task, setTask] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchSingleTask = async () => {
            const singleTask = await getSingleTask(id);
            setTask(singleTask.data)
        }
        fetchSingleTask()
    },[])

    const handleDelete = async () => {
        try {
            const response = confirm('Are you sure you want to delete this task?');
            if(!response) return;
            await deleteTask(id);
            navigate('/');
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        task ? 
      <div className='flex justify-center items-center w-full h-[75vh] mt-4'>
            <div className="flex justify-between items-start bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 shadow-md h-full w-3/4">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
              <p className="text-gray-600 mt-2">{task.description}</p>
              <p className="text-gray-400 mt-1">Due: {task.dueDate}</p>
            </div>
            <div className="flex space-x-4">
              <FontAwesomeIcon onClick={handleDelete} icon={faTrash} className="text-gray-600 cursor-pointer hover:text-blue-500" />
              <NavLink to={`/update/${id}`}><FontAwesomeIcon icon={faPenToSquare} className="text-gray-600 cursor-pointer hover:text-blue-500" /></NavLink>
              {/* <FaTrash className="text-gray-600 cursor-pointer hover:text-blue-500" onClick={() =>{}}/> */}
            </div>
    </div>


      </div>

      :

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
    )
}

export default ViewSingle;