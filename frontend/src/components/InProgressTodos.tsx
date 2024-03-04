import {Todo} from "../types/todos.ts";
import TodoItem from "./TodoItem.tsx";

type inProgressTodosProps = {
    todos: Todo[];
}
export default function InProgressTodos({todos}: inProgressTodosProps) {
    return (
        <>
            <div>
                <div className={"todo-list"}>
                    {todos.map(todo => (
                        <TodoItem key={todo.id} description={todo.description} status={todo.status}/>
                    ))}
                </div>
            </div>
        </>
    )
}