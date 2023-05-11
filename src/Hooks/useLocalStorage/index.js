import { useEffect, useState } from "react"

function useLocalStorage(itemName, contentItem) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(contentItem)
    const[sincronizedItem,setSincronizedItem] = useState(true)

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
          setSincronizedItem(true)
        } catch (error) {
          setError(true)
          setLoading(false)
        }
        
      }, 2000)
    },[sincronizedItem])

    const sincronize = () => {
      setLoading(true)
      setSincronizedItem(false)
    }
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {item, saveItem, error, loading, sincronize};
  
  }

  export {useLocalStorage}