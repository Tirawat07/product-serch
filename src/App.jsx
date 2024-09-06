import { useState } from 'react'
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';


function App() {
  const [searchFilter,setSearchFilter] = useState('')


  return (
    <div >
      <ProductSearch setSearchFilter={setSearchFilter}  searchFilter={searchFilter}/>

      <ProductList searchFilter={searchFilter} />
      
    </div>
  );
}

export default App;