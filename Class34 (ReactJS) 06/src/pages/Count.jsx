import { use, useContext } from "react"
import { CountContext } from "../context/count-context"

export default function Count() {

    const CountContextValue = use(CountContext)

    return <div>
        <h1>Count: {CountContextValue.count}</h1>
    </div>
}