import React, { useEffect, useState } from 'react'

const Table2 = () => {
    const [todoList, setTodoList] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
       const interval = setInterval(() => {
            getTodos();
        }, 3000);

        return () => {
            console.log("Component Unmounted")
            clearInterval(interval)
        }
    }, [])

    const getTodos = async () => {
        try {
            setLoader(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            // console.log(data)
            setTodoList(data)
            setLoader(false)
        } catch (error) {
            console.log(error)
            setLoader(false)
        }
    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {
                    loader ? 
                    <tr>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </tr> :
                        todoList.map((item, key) => (
                            <tr key={key}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Completed" : "Not Completed"}</td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    )
}

export default Table2
