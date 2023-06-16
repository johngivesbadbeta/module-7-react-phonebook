import { useEffect, useState } from 'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ constactData, setData ] = useState<[]>([])
  
    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) //< -with an empty array, this will occur every time something changes

    return { constactData, getData:handleDataFetch }
}
