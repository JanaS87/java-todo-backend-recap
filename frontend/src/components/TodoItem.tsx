import {TodoStatus} from "../types/todos.ts";
import "../styles/TodoItem.css"

type TodoItemProps = {
    description: string;
    status: TodoStatus;
}

export default function TodoItem({description, status}: TodoItemProps) {
    return (
        <div className={"todo-item"}>
            <p> Description: {description}</p>
            <p>Status: {status}</p>
        </div>
    )
}