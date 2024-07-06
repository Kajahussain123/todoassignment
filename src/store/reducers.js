import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      const newTaskList = [...state.tasks, { id: Date.now(), task: action.payload, completed: false }];
      localStorage.setItem('tasks', JSON.stringify(newTaskList));
      return {
        ...state,
        tasks: newTaskList
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks
      };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, task: action.payload.updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks
      };
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks
      };
    default:
      return state;
  }
};

export default rootReducer;
