import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const { addTodo } = useContext(TodosContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }
    
  return (
      <form className="form my-6">
          <div className="flex flex-col text-sm mb-2">
              <label htmlFor="todo" className="font-bold mb-2 text-gray-800 p-2">Todo</label>
              <input type="text" name="todo" id="todo" value={todo} placeholder="Enter an interesting item..." onChange={e => setTodo(e.target.value)} className="border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500 w-full"/>
          </div>
          <button type="submit" className="w-full rounded bg-blue-500 hover:bg-blue-600 text-whie py-2 px-4" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}

export default TodoForm