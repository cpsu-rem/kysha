import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
    
        setProducts(data);
     
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 w-full min-h-screen p-6 relative pt-32">
      <h1 className="text-3xl font-bold text-gray-800 text-left mb-8">
        Products
        <hr />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4 bg-gray-100"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-black">
                  ₱{product.price.toFixed(2)}
                </span>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
