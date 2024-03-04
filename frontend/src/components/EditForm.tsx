import {ChangeEvent, FormEvent, useState} from "react";
import {Todo, TodoStatus} from "../types/todos.ts";
import axios from "axios";

type EditFormProps = {
    description: string;
    status: TodoStatus;
    todo: Todo;
    onMoveTodo: (id: string, newStatus: TodoStatus) => void;
}

export default function EditForm({todo, onMoveTodo}: EditFormProps) {
    const [updatedTodo, setUpdatedTodo] = useState(todo);

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const {name, value} = event.target;
        setUpdatedTodo({
            ...updatedTodo,
            [name]: value
        });
    }

    function updateTodo(id: string, updatedTodo: Todo) {
            axios.put(`/api/todo/${id}/update`, updatedTodo)
                .then(response => {
                    setUpdatedTodo(response.data);
                    console.log("response: " + response.data);
                })
                .catch(error => {
                    console.error("Error updating todo", error)
                })
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        updateTodo(updatedTodo.id, updatedTodo);
        onMoveTodo(updatedTodo.id, updatedTodo.status);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="description" value={updatedTodo.description} onChange={handleInputChange}/>
                <select name="status" value={updatedTodo.status} onChange={handleInputChange}>
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </select>
                <input type="submit" value="Update"/>
            </form>
        </>
    )
}