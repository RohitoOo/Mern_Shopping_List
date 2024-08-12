import axios from "axios"

const API_ROOT = "https://git.heroku.com/mern-shoppinglist.git"
axios.defaults.baseURL = API_ROOT

export { API_ROOT }
