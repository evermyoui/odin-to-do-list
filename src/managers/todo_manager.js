import { Todo } from "../factories/todo"
import { projectDependencies } from "./project_manager";

export const createTodo = () => {
    const todo = new Todo();
    projectDependencies.defaultProject.todos.push(todo);
    return todo;
}

export const deleteTodo = (todoId) => {
    const todoIndex = projectDependencies.defaultProject.todos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) return;

    projectDependencies.defaultProject.todos.splice(todoIndex, 1);
}