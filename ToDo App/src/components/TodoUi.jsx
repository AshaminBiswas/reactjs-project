import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
function TodoUi() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null)



  useEffect(() => {
    const data = localStorage.getItem('todos')
    if (data) {
      setTodos(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleAdd = (e) => {
    e.preventDefault()
    if (!todo.trim()) return

    if (editingId) {
      const newTodos = todos.map(item =>
        item.id === editingId ? { ...item, todo: todo } : item
      )
      setTodos(newTodos)
      setEditingId(null)
    } else {
      setTodos([...todos, { todo, isCompleted: false, id: uuidv4() }])
    }
    setTodo("")
  }

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id)
    setTodo(todoToEdit.todo)
    setEditingId(id)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id
    })

    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }




  return (
    <div className='bg-green-100 p-1 md:p-5  mx-auto flex flex-col gap-4 justify-center items-center min-h-[90vh]'>
      <div className="ui-container rounded-2xl bg-green-300 min-h-[80vh] w-full p-2 md:p-5">
        <h1 className='text-zinc-900 font-semibold text-center text-4xl flex justify-center items-center gap-2'><LuListTodo className='text-4xl text-cyan-700' />To Do Manager</h1>
        <div className="todo mt-6">
          <div className="add-todo font-semibold">
            <h3 className='flex justify-start items-center gap-2'><RiTodoLine className='text-2xl text-green-800' /> Add Your Todo Here</h3>
            <form action="" className='w-[100%] my-2 border-s-green-700 flex flex-row justify-between items-center gap-6'>
              <input onChange={handleChange} value={todo} className='p-1.5 w-[90%] outline-0 border-2 border-solid border-green-700 rounded-xl' type="text" placeholder='Enter your todo ' />
              <button className='bg-green-700 px-4 py-1.5 rounded-2xl text-white cursor-pointer hover:bg-green-500 flex items-center gap-2' onClick={handleAdd}> Add <MdAssignmentAdd /></button>
            </form>
          </div>
          <div className="todo-list mt-5">
            <h3 className='font-semibold'>My Todo List...</h3>

            {todos.map((item) => {
              return (
                <div key={item.id} className="todo-list-items flex justify-between items-center gap-3 py-3">
                  <p className={item.isCompleted ? "line-through w-[80%]" : "w-[80%]"}>{item.todo}</p>
                  <input className='w-5 h-5' type="checkbox" name={item.id} id="" onChange={handleCheckbox} />
                  <button className='bg-green-700 px-4 py-1.5 rounded-2xl text-white cursor-pointer hover:bg-green-500 text-xl'
                    onClick={() => handleEdit(item.id)}><FaEdit /></button>
                  <button className='bg-green-700 px-4 py-1.5 rounded-2xl text-white cursor-pointer hover:bg-green-500 text-xl'
                    onClick={() => handleDelete(item.id)}><MdDeleteForever /></button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default TodoUi
