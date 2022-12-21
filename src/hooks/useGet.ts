import axios from 'axios'
import { useEffect, useState } from 'react'

const useGet = (apiUrl: string) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const getData = async (url: string) => {
    setIsLoading(true)
    setError('')
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${url}`)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        const msg: string = err.message
        setError(msg)
      })
  }

  useEffect(() => {
    getData(apiUrl)
  }, [])

  return {
    data,
    isLoading,
    error,
  } as const
}

export default useGet
