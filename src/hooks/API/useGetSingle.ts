import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetSingle = (apiUrl: string, elementId: string) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const getData = async (url: string, id: string) => {
    setIsLoading(true)
    setError('')
    await axios.get(`${BASE_URL}/${url}/${id}`)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        const msg: string = err.message
        setError(msg)
      })
  }

  useEffect(() => {
    getData(apiUrl, elementId)
  }, [])

  return [
    data,
    isLoading,
    error,
  ] as const
}

export default useGetSingle
