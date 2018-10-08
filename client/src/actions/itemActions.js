import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'
import axios from 'axios'

// Requests to the Backend

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  // could use fetch, instead, to make the http request ...
axios
  .get('http://159.65.155.169:5000/api/items')
  .then(res => dispatch({
    type: GET_ITEMS,
    payload: res.data
  }))

}

// Sending / Dispatching Payload to Reducers

export const deleteItem = (id) => dispatch => {
axios.delete(`http://159.65.155.169:5000/api/items/${id}`)
.then(res =>  dispatch({
  type: DELETE_ITEM,
  payload: id
    }))
}

export const addItem = (item) => dispatch => {
axios.post('http://159.65.155.169:5000/api/items' , item)
.then(res => dispatch({
    type: ADD_ITEM,
    payload: res.data
    }))
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
}
