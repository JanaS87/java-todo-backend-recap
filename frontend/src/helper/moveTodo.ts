import axios from "axios";
import { Todo, TodoStatus } from "../types/todos.ts";

export function moveTodo(todos: Todo[], id: string, newStatus: TodoStatus, handleTodoUpdate: (updatedTodo: Todo) => void) {
    const updatedTodo = todos.find(todo => todo.id === id);
    if (updatedTodo) {
        updatedTodo.status = newStatus;
        axios.put(`/api/todo/${id}/update`, updatedTodo)
            .then(response => {
                handleTodoUpdate(response.data);
            })
            .catch(error => {
                console.error("Error updating todo", error)
            });
    }
}

