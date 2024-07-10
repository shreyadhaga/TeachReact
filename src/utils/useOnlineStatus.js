import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    // true implies online false implies offline
    const [status, setStatus] = useState();
    useEffect(() => {
        window.addEventListener('offline', () => {
            setStatus(false)
        })
        window.addEventListener('online', () => {
            setStatus(true)
        })
    }, [])
    return status
}
export default useOnlineStatus
