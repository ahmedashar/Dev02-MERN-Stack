import { useEffect, useReducer, useState } from "react"
const LOADER = "LOADER";
const USERS = "USERS";
const ERROR = "ERROR";

const userInitialState = {
    users: null,
    loading: false,
    error: ""
}

const reducer = (state, action) => {
    if (action.type === LOADER) {
        return { ...state, loading: action.payload }
    }
    if (action.type === USERS) {
        return { ...state, users: action.payload }
    }
    if (action.type === ERROR) {
        return { ...state, error: action.payload }
    }

    return state;
}

export default function UsersPage() {
    const [states, dispatch] = useReducer(reducer, userInitialState);
    const { users, loading, error } = states;
    console.log(users, loading, error);

    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState("");

    useEffect(() => {
        (async function () {
            dispatch({ type: LOADER, payload: true })
            // setLoading(true);
            try {
                const res = await fetch("https://dummyjson.com/sers");
                const body = await res.json();
                dispatch({ type: USERS, payload: body.users })
                // setUsers(body.users)
            } catch (error) {
                console.log(error);
                dispatch({ type: ERROR, payload: `${error.message}: Failed to fetch users` })
                // setError(`${error.message}: Failed to fetch users`)
            } finally {
                dispatch({ type: LOADER, payload: false })
                // setLoading(false)
            }
        })()
    }, []);

    return <main>
        <h1>Users</h1>
        {error && <h5 style={{ color: "red" }}>{error}</h5>}
        {loading && <h1>Loading...</h1>}
        {users && users?.length > 0 && users?.map(user => {
            return <div>
                <h1>{user.firstName} {user?.lastName}</h1>
            </div>
        })}
        {/* {error && <h5 style={{ color: "red" }}>{error}</h5>}
        {loading && <h1>Loading...</h1>}
        {users && users.map(user => {
            return <div>
                <h1>{user.firstName} {user.lastName}</h1>
            </div>
        })} */}
    </main>
}