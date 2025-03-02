import { useCallback, useMemo, useState } from 'react'

import './App.css'
import Todo from './component/todo';

function App() {
  const [count, setCount] = useState(0)
  const [show,setShow] = useState(false);
  const [todo,setTodo] = useState(["task", "task"])
  
  const countNumber = (num)=>{
    for(let i=0; i< 1000000000; i++){

    }
    console.log(num, "<-- expensive calculation function")
    return num;
  }

  // const checkData = countNumber(count)
  const checkData = useMemo(()=>{ return countNumber(count) }, [count])

  console.log("my App")

  // const addTodo = ()=> {
  //   setTodo(prev => [...prev, "task"])
  // }

  const addTodo = useCallback(()=>{
    return setTodo(prev => [...prev, "task"])
  }, [todo])
  return (
    <>
      <div>
       
      </div>
      <h1>useMemo and useCallback</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {checkData}
        </button>
        <button onClick={()=> setShow(!show)}>
          toggle {show ? "ON": "OFF"}
        </button>

        <Todo data={todo} addTodo={addTodo}/>
      </div>
     
    </>
  )
}

export default App


// useMemo:

// React Hook that memoizes (caches) the result of a function based on its dependencies.
// Returns the same value as long as the dependencies haven't changed, preventing unnecessary re-computations.
// Useful for expensive calculations or data transformations that don't rely on component state or props directly.




// useCallback:

// React Hook that memoizes a callback function based on its dependencies.
// Ensures the component receives the same function reference as long as the dependencies haven't changed, even if the component re-renders.
// This is crucial for child components that rely on the same callback function to avoid unnecessary prop updates and re-renders.
