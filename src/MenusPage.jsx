import React from 'react';

import MenusContainer from './MenusContainer';
import CategoriesContainer from './CategoriesContainer';

export default function MenusPage() {
  return (
    <>
      <h1>메뉴판</h1>
      <CategoriesContainer />
      <MenusContainer />
    </>
  );
}

// function FormContainer() {
//   return (
//     <form>
//       <input type="text" name="" id="" />
//       <button type="button">
//         <span role="img" aria-label="search">🔍</span>
//       </button>
//     </form>
//   );
// }
