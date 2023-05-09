import { useEffect, useState } from "react"

function useLocalStorage(itemName, contentItem) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(contentItem)

    useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(contentItem))
            parsedItem = contentItem
          }else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
        } catch (error) {
          setError(true)
          setLoading(false)
        }
        
      }, 2000)
    },[])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {item, saveItem, error, loading};
  
  }

  export {useLocalStorage}