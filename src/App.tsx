import React, {FC, useState, useEffect} from "react";
import './App.css'
// import Person, {HairColor} from "./components/Person";
import AddTodos from "./components/todos/AddTodos";
import TodoList from "./components/todos/TodoList";
import {TodoListInterface} from './Interfaces'

const App:FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<TodoListInterface[]>([])
  const [newTask, setNewTask] = useState<TodoListInterface>({task: "", deadline: 0})
  
  useEffect(() =>{
    setNewTask({task: task, deadline: deadline})
  }, [task, deadline])
  
  const handleOnClick = (): void => {
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const taskCompleted = (task: string): void => {
        setTodoList(todoList.filter(todo => todo.task !== task))
    }
  
  return (
    <>
      {/* <Person 
        name="John" 
        age={28} 
        isMarreid={false} 
        HairColor={HairColor.Pink} 
        userType="instructor" 
      /> */}

      <div>
        <div className="add-todos">
          <AddTodos
            task={task}
            setTask={setTask}
            deadline={deadline}
            setDeadline={setDeadline}
            handleOnClick={handleOnClick}
          />
        </div>
        <div className="todo-list">
          {/* pass object as a props */}
          {/* {todoList && todoList.map((todo: TodoListInterface, index: number) => (
            <TodoList key={index} todo={todo} />
          ))} */}

          {/* pass array of object as a props */}
          <TodoList todoList={todoList} taskCompleted={taskCompleted} />
        </div>
      </div>

    </>
  )
    
}

export default App;
