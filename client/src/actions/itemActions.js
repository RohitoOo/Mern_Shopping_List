import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types"
import axios from "axios"
import { API_ROOT } from "../api"

// Requests to the Backend

export const getItems = () => dispatch => {
  dispatch(setItemsLoading())
  // could use fetch, instead, to make the http request ...
  axios.get(`${API_ROOT}/api/items`).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )
}

// Sending / Dispatching Payload to Reducers

export const deleteItem = id => dispatch => {
  axios.delete(`${API_ROOT}/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
}

export const addItem = item => dispatch => {
  axios.post(`${API_ROOT}/api/items`, item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  )
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
