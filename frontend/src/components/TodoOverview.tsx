import {Todo} from "../types/todos.ts";
import OpenTodos from "./OpenTodos.tsx";
import InProgressTodos from "./InProgressTodos.tsx";
import DoneTodos from "./DoneTodos.tsx";
import "../styles/TodoOverview.css"

type TodoOverviewProps = {
    todos: Todo[];
}

export default function TodoOverview({todos}: TodoOverviewProps){
    const openTodos = todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = todos.filter(todo => todo.status === "DONE")

    return (
        <>
            <div className="todo-overview">
                <div className={"column"}>
                <h2 className={"column-title"}>Open</h2>
                <OpenTodos todos={openTodos} />
                </div>
                <div className={"column"}>
                <h2 className={"column-title"}>In Progress</h2>
                <InProgressTodos todos={inProgressTodos} />
                </div>
                <div className={"column"}>
                <h2 className={"column-title"}>Done</h2>
                <DoneTodos todos={doneTodos} />
                </div>
            </div>
        </>
    )
}