import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList'; // Ensure this is the correct path
import RecipeDetail from './components/RecipeDetail'; // Ensure this is the correct path
import AddRecipeForm from './components/AddRecipeForm'; // Ensure this is the correct path
import DefaultLayout from './components/layouts/DefaultLayout'; // Ensure this is the correct path

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
          {/* Additional routes as needed */}
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
