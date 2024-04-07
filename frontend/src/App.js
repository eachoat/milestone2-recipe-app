import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import DefaultLayout from './layouts/DefaultLayout';
import RecipeDetail from './components/RecipeDetail'; 
import AddRecipeForm from './components/AddRecipeForm'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="add-recipe" element={<AddRecipeForm />} />
          {/* Add more nested routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
