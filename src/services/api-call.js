import { URL } from '../assets/backendURL.js';
import axios from 'axios';

const getAllTasks = async () => {
    try {
        const allTasks = await axios.get(`${URL}/tasks/get/all`)

        if(allTasks.status === 200){
            return allTasks.data
        }
        else{
            throw new Error("Error while fetching the tasks")
        }
    } catch (error) {
        console.log(error.message)
    }
    
}

const getSingleTask = async (id) => {
    try {
        const singleTask = await axios.get(`${URL}/tasks/get/${id}`)

        if(singleTask.status === 200){
            return singleTask.data
        }
        else{
            throw new Error("Error while fetching the task")
        }
    } catch (error) {
        console.log(error.message)
    }
    
}

const createTask = async (task) => {   
    try {
        const newTask = await axios.post(`${URL}/tasks/create`, task)        
        if(newTask.status === 200 || newTask.status === 201){
            return newTask.data
        }
        else{
            throw new Error("Error while creating the task")
        }
    } catch (error) {
        console.log(error.message)
    }

}

const deleteTask = async (id) => {
    try {
        const deletedTask = await axios.delete(`${URL}/tasks/delete/${id}`)

        if(deletedTask.status === 200){
            return deletedTask.data
        }
        else{
            throw new Error("Error while deleting the task")
        }
    } catch (error) {
        console.log(error.message)
    }
    

}

const updateTask = async (id, task) => {
    try {
        const updatedTask = await axios.put(`${URL}/tasks/update/${id}`, task)

        if(updatedTask.status === 200){
            return updatedTask.data
        }
        else{
            throw new Error("Error while updating the task")
        }
    } catch (error) {
        console.log(error.message)
    }
    
}

export {
    getAllTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
}