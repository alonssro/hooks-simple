import { useEffect, useState } from 'react'
import axios from 'axios'

const useResources = resource => {
    const [resources, setResources] = useState([])

    const fetchResources = async resource => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        )
        setResources(data)
    }

    useEffect(() => {
        fetchResources(resource)
    }, [resource])
    return resources
}

export default useResources
