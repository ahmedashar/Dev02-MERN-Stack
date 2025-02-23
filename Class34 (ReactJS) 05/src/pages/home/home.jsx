import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import { useLocation, useSearchParams } from 'react-router-dom'
import useCounter from '../../utils/customHook/useCounter';

const Home = () => {
  const location = useLocation();
  console.log(location)
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const name = searchParams.get("name")
  const email = searchParams.get("email")
  const age = searchParams.get("age")
  console.log(name, email, age)

 // my custom hook
 const {count, increment, decrement, reset} = useCounter(5) 


  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>Welcome {location?.state?.name}</p>

      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Home
