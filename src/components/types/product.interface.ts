import {IRecipeItem} from "./recipe.interface";
import {ICategoryItem} from "./category.interface";

export interface IProductItem {
    id: number;
    name: string;
    description?: string;
    proteins: number;
    fats: number;
    carbohydrates: number;
    calories: number;
    recipes: IRecipeItem[];
    category: ICategoryItem;
}