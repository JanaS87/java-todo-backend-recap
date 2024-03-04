import {Todo, TodoStatus} from "../types/todos.ts";
import TodoItem from "./TodoItem.tsx";
import EditForm from "./EditForm.tsx";
import {useState} from "react";
import axios from "axios";
import {moveTodo} from "../helper/moveTodo.ts";

type openTodosProps = {
    todos: Todo[];
    onFetchTodos: () => void;
}

export default function OpenTodos({todos, onFetchTodos}: openTodosProps) {
    const [openTodos, setOpenTodos] = useState(todos);
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null);


 function  updateTodosOnServer(id: string, updatedTodo: Todo) {
        axios.put(`/api/todo/${id}/update`, updatedTodo)
            .then(response => {
                console.log('Todos updated on server' , response.data);
                onFetchTodos();
            })
            .catch(error => {
                console.error("Error updating todos on server", error)
            });
    }

    function handleTodoUpdate(id: string, updatedTodo: Todo) {
        const updatedTodos = openTodos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setOpenTodos(updatedTodos);
        setEditingTodoId(null);
        updateTodosOnServer(id, updatedTodo);

    }

    return (
        <>
                <div>
                    <div className={"todo-list"}>
                        {todos.map((todo) => (
                            <div key={todo.id}>
                                {editingTodoId === todo.id ? (
                                    <EditForm
                                        todo={todo}
                                        onMoveTodo={(id: string, newStatus: TodoStatus) => {
                                            moveTodo(todos, id, newStatus, (updatedTodo: Todo) => handleTodoUpdate(id, updatedTodo));
                                        }}
                                        description={todo.description}
                                        status={todo.status}/>
                                ) : (
                                    <div>
                                        <TodoItem description={todo.description} status={todo.status}/>
                                        <button onClick={() => setEditingTodoId(todo.id)}>Edit</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
        </>
    )
}