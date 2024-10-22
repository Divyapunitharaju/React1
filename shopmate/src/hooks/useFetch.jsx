import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])




    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        }
        fetchApi()
    }, [url])


    return { data }

}