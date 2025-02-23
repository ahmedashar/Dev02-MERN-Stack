import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[url])

    return { data, error, loading }
}

export default useFetch;