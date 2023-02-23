import './style.scss';
import {
  AddToDoList,
  setTasks,
  showTasks,
  GetToDoList,
  updateLocalStorage,
} from './modules/AddToDoItems.js';
import { clearAllCompletedTasks } from './modules/Completed.js';

const newTaskInput = document.querySelector('#add-to-do > input');
const addTaskButton = document.querySelector('#add-task-button');
const clearCompletedTasksButton = document.querySelector('#clear-completed-tasks-button');

newTaskInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    AddToDoList(newTaskInput);
    showTasks();
  }
});

addTaskButton.addEventListener('click', () => {
  AddToDoList(newTaskInput);
  showTasks();
});

clearCompletedTasksButton.addEventListener('click', () => {
  setTasks(clearAllCompletedTasks(GetToDoList()));
  updateLocalStorage();
  showTasks();
});

setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
showTasks();
