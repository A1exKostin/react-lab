// 1_7_3 Extracting a list item component 
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

import { recipes } from './data';

// Компонент Recipe извлечен для упрощения кода RecipeList.
// Обратите внимание, что атрибут key должен быть передан непосредственно при рендере компонента <Recipe />
// внутри метода map, так как React отслеживает ключи в том массиве элементов, который создается итерацией.
interface RecipeProps {
    id: string;
    name: string;
    ingredients: string[];
}

function Recipe({ name, ingredients }: RecipeProps) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}