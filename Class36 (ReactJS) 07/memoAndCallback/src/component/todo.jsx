import React, { memo } from 'react'

const Todo = ({data, addTodo}) => {
    console.log("child is rendered")
  return (
    <div style={{marginTop:"10px"}}>
        <hr />
        <button onClick={addTodo}>Add Task</button>
        <div>
            {data?.map((item,key)=>(
                <h3 key={key}>{item + key}</h3>
            ))}
        </div>
    </div>
  )
}

export default memo(Todo)
