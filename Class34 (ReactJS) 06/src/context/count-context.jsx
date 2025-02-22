import { createContext, useState } from "react";

export const CountContext = createContext(0);


export default function CountProvider({ children }) {
    const [count, setCount] = useState([{
        todo: 'sdfsdf',
        id: Date.now()
    }]);

    function incrementCount() {
        setCount(count + 1);
    }
    function decrementCount() {
        setCount(count - 1);
    }

    return (<CountContext.Provider value={
        {
            count: count,
            incrementCount: incrementCount,
            decrementCount: decrementCount
        }
    }>
        {children}
    </CountContext.Provider>
    );
}

