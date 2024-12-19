"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 

export default function ProductListing() {
  const [products, setProducts] = useState([]); // Ensure products is an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products || []); // Fallback to an empty array
        console.log("Response Data",response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message); // Save error message
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
    return <div>No products available</div>; // Handle empty state
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-black">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 12).map((product) => ( // Safely use slice
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
