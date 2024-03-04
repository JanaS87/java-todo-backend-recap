import {Todo} from "../types/todos.ts";
import TodoItem from "./TodoItem.tsx";

type openTodosProps = {
    todos: Todo[];
}

export default function OpenTodos({todos}: openTodosProps) {
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