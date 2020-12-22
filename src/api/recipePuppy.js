import axios from 'axios'

export const generateRecipes = (query) => {
  return axios({
    method: 'GET',
    url: 'http://www.recipepuppy.com/api/?q=kids'
  })
}
