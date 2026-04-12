import { recipes } from './data';

// Внешний вызов map проходит по массиву рецептов, создавая заголовки <h2>.
// Внутренний вызов map перебирает массив ингредиентов (ingredients) для каждого рецепта.
export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient => (
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
