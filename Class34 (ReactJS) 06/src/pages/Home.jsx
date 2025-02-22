import { useContext, useState } from "react"
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../context/count-context";

export default function Home() {
    const navigate = useNavigate();
    const { count, incrementCount, decrementCount } = useContext(CountContext)

    return <div>
        <a onClick={() => navigate('/count')}>Goto Count Page</a>
        <br />
        <br />
        <br />
        <h1>Home</h1>

        <h1>Count: {count}</h1>
        <br />
        <Button title={"Increment"} onClick={incrementCount}></Button>
        <Button title={"Decrement"} onClick={decrementCount}></Button>
    </div>
}