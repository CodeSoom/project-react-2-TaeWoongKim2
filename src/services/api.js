import foods from '__fixtures__/foods';
import foodMaxims from '__fixtures__/foodMaxims';
import categories from '__fixtures__/categories';

export async function fetchFoods() {
  // TODO: fecth foods data from JSON Server.
  const data = await foods;
  return data;
}

export async function fetchFoodMaxims() {
  // TODO: fecth food maxims data from JSON Server.
  const data = await foodMaxims;
  return data;
}

export async function fetchCategories() {
  // TODO: fecth foods data from JSON Server.
  const data = await categories;
  return data;
}
