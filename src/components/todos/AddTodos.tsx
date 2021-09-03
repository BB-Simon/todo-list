import React, {FC, ChangeEvent} from 'react';
import {AddTodoInterface} from '../../Interfaces'

const AddTodos:FC<AddTodoInterface> = ({task, setTask, deadline, setDeadline, handleOnClick}) => {

    const handleOnChange = (event:ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value))
        }
    }
    return (
        <div>
            <input type="text" value={task} placeholder="Task..." name="task" onChange={handleOnChange} />
            <input type="number" value={deadline} placeholder="Deadline (in days)..." name="deadline" onChange={handleOnChange} />
            <input onClick={handleOnClick} type="submit" value="Add Task" />
        </div>
    );
};

export default AddTodos;