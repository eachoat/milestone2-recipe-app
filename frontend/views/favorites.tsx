import React from 'react'
import Default from './layouts/default'

interface FavoritesPageProps {
    favoriteRecipes: {
        name: string; // Assuming name is the property for recipe title
        category: string;
    }[];
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favoriteRecipes }) => {
    const categories = [...new Set(favoriteRecipes.map(recipe => recipe.category))];

    const filterRecipesByCategory = (category: string) => {
        return favoriteRecipes.filter(recipe => recipe.category === category);
    };

    return (
        <Default>
            <div className="container">
                <h2>Favorites Page</h2>
                <div className="row">
                    {categories.map((category, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title">{category}</h3>
                                    <ul className="list-group list-group-flush">
                                        {filterRecipesByCategory(category).map((recipe, index) => (
                                            <li className="list-group-item" key={index}>{recipe.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Default>
    );
};

export default FavoritesPage