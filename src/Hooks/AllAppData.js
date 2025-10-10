import axios from "axios";
import { useEffect, useState } from "react"

const AllAppData = () => {
    const [allApp, setAllapp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios('../AppData.json')
        .then(data => setAllapp(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])

    return{ allApp, loading, error}
}

export default AllAppData