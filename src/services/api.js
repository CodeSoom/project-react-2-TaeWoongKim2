import foods from '__fixtures__/foods';
import categories from '__fixtures__/categories';

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
