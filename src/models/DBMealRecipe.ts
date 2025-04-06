/**
 * Represents a meal recipe retrieved from the database.
 * 
 * @property idMeal - A unique identifier for the meal.
 * @property strMeal - The name of the meal.
 * @property strArea - The region or area where the meal originates.
 * @property strMealThumb - A URL pointing to the thumbnail image of the meal.
 */
export interface DBMealRecipe {
    idMeal: string;
    strMeal: string;
    strArea: string;
    strMealThumb: string;
}