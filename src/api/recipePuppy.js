import axios from 'axios'

export const generateRecipes = (query) => {
  return axios({
    method: 'GET',
    url: `http://recipepuppyproxy.herokuapp.com/api/?q=${query}`
  })
}
