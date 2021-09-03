import { Dispatch, SetStateAction } from "react";

export interface AddTodoInterface {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  deadline: number;
  setDeadline: Dispatch<SetStateAction<number>>;
  handleOnClick: () => void;
}

export interface TodoListInterface {
    task: string;
    deadline: number;
}