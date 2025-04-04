/**
 * Represents a recipe with its basic details.
 *
 * @interface Recipe
 * 
 * @property {number} id - The unique identifier for the recipe.
 * @property {string} title - The title or name of the recipe.
 * @property {string} description - A brief description of the recipe.
 * @property {string} [image] - An optional URL or path to an image representing the recipe.
 */
export interface Recipe {
    id: number;
    title: string;
    description: string;
    image?: string;
}