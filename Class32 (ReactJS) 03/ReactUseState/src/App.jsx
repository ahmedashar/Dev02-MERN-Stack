import { useState } from "react"
import Bulb from "./component/Bulb";
import Todo from "./component/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name: "Ashar", age: 25})

 console.log("App component")

 const handleClick = () => {
    //  setCount(count + 1)
    //  setCount(count + 1)
    //  funtional update approach of state
    // setCount( prev => prev + 1)
    setCount( prev => prev + 1)

     console.log(count)

  
 }
 const updateUser = () => {
    setUser({...user, age: 30})
 }
 
 return (
    <>
      <div className='container'>
          {/* <h1>React Hook (useState)</h1> */}
          {/* <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Update Counter {count}</button> */}
          {/* <button className="btn btn-primary" onClick={handleClick}>Update Counter {count}</button>

          <p>userName : {user.name} , age: {user.age}</p>
          <button className="btn btn-success" onClick={updateUser}>update user</button> */}

          {/* <Bulb />
          <Bulb /> */}
          <Todo />
      </div>
    </>
  )
}

export default App

    //  useState is a React Hook that allows functional components to have local state. It enables components to store and update values over time without requiring class components.
    
    
    // How useState Works
    // useState(initialValue) returns an array with two values:
    // State variable (e.g., count)
    // Setter function to update the state (e.g., setCount)
    // The setter function re-renders the component when the state changes.