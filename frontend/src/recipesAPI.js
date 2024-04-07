import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchRecipes = () => {
  return axios.get(`${BASE_URL}/api/recipes`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
