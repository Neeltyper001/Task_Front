import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTask } from '../services/api-call';
const UpdateTask = () => {
  const { id } = useParams();  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(()=>{
      const fetchSingleTask = async () => {
          const singleTask = await getSingleTask(id);
          
          setTitle(singleTask.data.title);
          setDescription(singleTask.data.description);
          setDueDate(singleTask.data.dueDate);
      }
      fetchSingleTask()
  },[])

  console.log(title)
  console.log(description)
  console.log(dueDate)
    return (
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg font-medium">
        Make necessary adjustments to ensure your tasks are up-to-date and accurately reflect your goals.
        </p>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="title">Title</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              id="title"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="sr-only" htmlFor="description">Description</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Description"
                rows="4"
                id="description"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="dueDate">Due Date {dueDate}</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="date"
                id="dueDate" 
                defaultValue={dueDate} 
                value={dueDate}
                onChange={(e)=>{setDueDate(e.target.value)}}              
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    );
}

export default UpdateTask;