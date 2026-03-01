import { Todo } from "../factories/todo"
import { projectDependencies } from "./project_manager";

const projectSaved = projectDependencies.getProjects();
const defaultProj = projectSaved[0];

export const createTodo = (title, description, dueDate, priority) => {
    const todo = new Todo(title, description, dueDate, priority);
    defaultProj.todos.push(todo);
    return todo;
}

// export const deleteTodo = (todoId) => {
//     const todoIndex = defaultProject.todos.findIndex(t => t.id === todoId);
//     if (todoIndex === -1) return;
//     defaultProject.todos.splice(todoIndex, 1);
// }