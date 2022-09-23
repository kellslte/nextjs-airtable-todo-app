import { useState } from "react";

const { createContext } = require("react");

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const refreshTodos = async () => {
        try {
            const res = await fetch('/api/todos');
            const records = await res.json();
            setTodos(records);
        } catch(err) {
            console.log(err);
        }
    }

    const addTodo = async (description) => {
         try {
             const res = await fetch("/api/todo", {
                 method: 'POST',
                 body: JSON.stringify({ description }),
                 headers: {
                     'Content-Type': 'application/json'
                 },
           });
           const record = await res.json();
             setTodos((prevTodos) => {
               return [record, ...prevTodos];
           });
         } catch (err) {
           console.log(err);
         }
    }

    const updateTodo = async (todo) => {
      try {
        const res = await fetch("/api/update-todo", {
          method: "PUT",
          body: JSON.stringify(todo),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await res.json();
        setTodos((prevTodos) => {
            const todos = [...prevTodos];
            const existingTodo = todos.find(record => record.id === todo.id);
            existingTodo.fields = todo.fields;
            return todos;
        });
      } catch (err) {
        console.log(err);
      }
    }

    const deleteTodo = async (id) => {
        try {
            await fetch('/api/delete-todo', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            setTodos(prevTodos => {
                return prevTodos.filter(record => record.id !== id);
            })
        }
        catch(err) {
            console.log(err);
        }
    }

    return <TodosContext.Provider value={
        {
            todos,
            setTodos,
            refreshTodos,
            updateTodo,
            deleteTodo,
            addTodo,
      }
  }>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };