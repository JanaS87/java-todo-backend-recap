import './styles/App.css'
import {Todo} from "./types/todos.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import TodoOverview from "./components/TodoOverview.tsx";



function App() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(
        fetchData
        ,[]
    )

    function fetchData() {
        axios.get("/api/todo")
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => {
                console.error("Error fetching data", error)
            })
    }

  return (
    <>
        <TodoOverview onFetchTodos={fetchData} todos={todos}/>
    </>
  )
}

export default App
