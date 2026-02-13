import { useState } from "react";

function ProductFilter() {

    const products = [
    { id: 1, name: "Laptop", price: 9999, inStock: true },
    { id: 2, name: "Keyboard", price: 499, inStock: false },
    { id: 3, name: "Mouse", price: 299, inStock: true },
    { id: 4, name: "Monitor", price: 1999, inStock: true }
  ];

const [search, setSearch] = useState("");

const [onlyInStock, setOnlyInStock] = useState(false);

const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStock = onlyInStock ? product.inStock : true;

  return matchesSearch && matchesStock;
});


    return (   
        <div>
            <h2>Producter</h2>
            <label>
            <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
            />
            Visa bara i lager
            </label>
            <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />  
{filteredProducts.length === 0 ? (
  <p>Inga produkter hittades</p>
) : (
  <ul>
    {filteredProducts.map((product) => (
      <li key={product.id}>
        {product.name} – {product.price} kr –{" "}
        {product.inStock ? "I lager" : "Slut i lager"}
      </li>
    ))}
  </ul>
)}



          
        </div>
    )
}

export default ProductFilter