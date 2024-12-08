import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";


export interface Task {
  id: number;
  title: string;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

interface AddTask {
  type: 'ADD',
  task: Task
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
      case 'ADD':
          return [...tasks, action.task]
          break;
      case 'DELETE':
          return tasks.filter(t => t.id !== action.taskId);
          break;
  
      default:
          return tasks;
          break;
  }
}


interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
