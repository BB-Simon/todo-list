import React, {FC} from 'react';
import { TodoListInterface } from '../../Interfaces';

// This way if you pass a object as a props
// interface Todo {
//     todo: TodoListInterface
// }
// const TodoList:FC<Todo> = ({todo}) => {
//     return (
//         <div>
//             <span>{todo.task}</span>
//         </div>
//     );
// };

// this way if you pass a array of object as a props
interface Todo {
    todoList: TodoListInterface[]
    taskCompleted(task:string): void;
}

const TodoList:FC<Todo> = ({todoList, taskCompleted}) => {
    return (
        <>
            <div>
                <h1>{todoList.length > 0 ? "Tasks to do...!!" : "No Task added to do...!!"}</h1>
            </div>
            {todoList && todoList.map((todo: TodoListInterface, index: number)=>(
                <div className="list" key={index}>
                    <span> {todo.task}</span>
                    <span> {todo.deadline}</span>
                    <span onClick={() => {taskCompleted(todo.task)}}>x</span>
                </div>
            ))}
        </>
    );
};

export default TodoList;