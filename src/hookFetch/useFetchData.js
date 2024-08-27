import { useState, useEffect } from "react"

export function useFetchData(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error)
      }
    }

    fetchData()
  }, [url])

  return data
}