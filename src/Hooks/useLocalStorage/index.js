import { useEffect, useReducer, useState } from "react"

function useLocalStorage(itemName, contentItem) {
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  // const [item, setItem] = useState(contentItem)
  // const[sincronizedItem,setSincronizedItem] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState(contentItem))

  const {loading, error, item, sincronizedItem} = state

  //actions
  const onError = (error) => (dispatch({type: actionTypes.error, payload: error}))
  const onSuccess = (item) => (dispatch({type: actionTypes.succes, payload: item}))
  const onSave = (item) => (dispatch({type: actionTypes.save, payload: item}))
  const onSincronize = () => (dispatch({type: actionTypes.sincronize}))

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
          onSuccess(parsedItem)
          // setItem(parsedItem)
        }
        // setLoading(false)
        // setSincronizedItem(true)
      } catch (error) {
        // setError(true)
        // setLoading(false)
        onError(error)
      }
      
    }, 2000)
  },[sincronizedItem])

  const sincronize = () => {
    onSincronize()
  }

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }

  return {item, saveItem, error, loading, sincronize};
  
}

const initialState = (state) => ({
  loading: true,
  error: false,
  item: state,
  sincronizedItem: true
})

const actionTypes = {
  error: 'ERROR',
  succes: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}

const reduceObj = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.succes]: {
    ...state,
    error: false,
    sincronizedItem: true,
    loading: false,
    item: payload
  },
  [actionTypes.save]:{
    ...state,
    item: payload
  },
  [actionTypes.sincronize]:{
    ...state,
    sincronizedItem: false,
    loading: true
  }
})

const reducer = (state, action) => (
  reduceObj(state,action.payload)[action.type] || state
)

export {useLocalStorage}