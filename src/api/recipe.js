import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexRecipes = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/recipes/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showRecipe = (user, recipeId) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/recipes/${recipeId}/`,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteRecipe = (user, recipeId) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/recipes/${recipeId}/`,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createRecipe = (user, recipe) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/recipes/`,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { recipe }
  })
}

export const updateRecipe = (user, recipe, id) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/recipes/${id}/`,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { recipe }
  })
}
