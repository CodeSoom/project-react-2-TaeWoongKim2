import foods from '../../fixtures/foods';

export async function fetchFoods() {
  // TODO: fecth foods data from JSON Server.
  const data = await foods;
  return data;
}

export async function fetchDummy() {
  // TODO: Delete this!
}
