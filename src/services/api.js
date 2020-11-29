import foods from '../../fixtures/foods';
import categories from '../../fixtures/categories';

export async function fetchFoods() {
  // TODO: fecth foods data from JSON Server.
  const data = await foods;
  return data;
}

export async function fetchCategories() {
  // TODO: fecth foods data from JSON Server.
  const data = await categories;
  return data;
}
