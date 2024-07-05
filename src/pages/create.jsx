import { createTask } from "../services/api-call";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = async (e) => {
    try {
      e.preventDefault();

      if([title,description,dueDate].some(input => input === '')) {
        throw new Error('Please fill out all fields')
      }

      const task = {
        title,
        description,
        dueDate
      }

      const newTask = await createTask(task);
      console.log(newTask)
      if(newTask.statusCode === 200 || newTask.statusCode === 201){
        console.log('Task created successfully')
        setTitle('');
        setDescription('');
        setDueDate('');     
        navigate('/'); 
      }
      else{
        throw new Error("Could not empty the form")
      }
      
    } 
    catch (error) {
      console.log(error.message)
    }
    
  }
    return (
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg font-medium">
        Streamline your productivity with our Task Management Application. Easily add new tasks, set due dates, and manage your workload effectively. We are committed to helping you stay organized and focused.
        </p>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleCreateTask} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="title">Title</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              onChange={(e)=>{setTitle(e.target.value)}}
              id="title"
              value={title}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="sr-only" htmlFor="description">Description</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Description"
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
                rows="4"
                id="description"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="dueDate">Due Date</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="date"
                onChange={(e)=>{setDueDate(e.target.value)}}
                value={dueDate}
                id="dueDate"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"             
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    );
}

export default CreateTask;