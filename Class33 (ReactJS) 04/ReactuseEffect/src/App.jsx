import { useEffect, useState } from 'react'
import Table1 from './component/Table1'
import Table2 from './component/Table2'


function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [showTable, setShowTable] = useState("table1")

  // useEffect(()=>{
  //   console.log("component rendered")
  //   getProducts()
  // }, [count2, count])

  // const getProducts = async ()=>{
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  https://jsonplaceholder.typicode.com/todos
  return (
    <>
      <h1>Use Effect Hook</h1>
      {/* <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
      <button onClick={()=>{setCount2(count2+1)}}>Count2 {count2}</button> */}
      <div className='d-flex justify-content-center gap-2'>
          <button className='btn btn-primary' onClick={()=> setShowTable("table1")}>Post Data</button>
          <button className='btn btn-primary' onClick={()=> setShowTable("table2")}>Product Data</button>
      </div>
      <div>
        {
          showTable === "table1" ? <Table1 /> : <Table2 />
        }
      </div>
    </>
  )
}

export default App
