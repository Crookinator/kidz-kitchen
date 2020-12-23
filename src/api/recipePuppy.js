import axios from 'axios'

export const generateRecipes = (query) => {
  return axios({
    method: 'GET',
    url: `https://recipepuppyproxy.herokuapp.com/api/?q=${query}`
  })
}
