import TodoItem from "./TodoItem.tsx";
import {Todo} from "../types/todos.ts";

type TodoOverviewProps = {
    todos: Todo[];
}
export default function DoneTodos({todos}: TodoOverviewProps){
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