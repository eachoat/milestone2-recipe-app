// Action Types
export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

// Action Creator for fetching recipes
export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_RECIPES_START });

    fetch('/api/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dispatch({
          type: FETCH_RECIPES_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_RECIPES_FAILURE,
          payload: error.message,
        });
      });
  };
};
