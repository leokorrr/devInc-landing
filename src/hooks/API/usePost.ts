import axios from 'axios'
import { useState } from 'react'

const usePost = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [error, setError] = useState<string>('')
  const [isPosting, setIsPosting] = useState<boolean>(false)

  const postData = async <T extends object>(url: string, params: T) => {
    setIsPosting(true)
    setError('')
    await axios.post(`${BASE_URL}/${url}`, params)
      .then(() => setIsPosting(false))
      .catch((err) => {
        const msg: string = err.message
        setError(msg)
      })
  }

  return [
    postData,
    isPosting,
    error,
  ] as const
}

export default usePost
