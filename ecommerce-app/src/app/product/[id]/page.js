import axios from 'axios';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  // Ensure that `params` is awaited correctly
  const { id } = await params; // Ensure that `params` is awaited first
  const product = await axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => res.data);

  return {
    title: product.title, // Dynamically set the page title based on the product name
  };
}

export default async function ProductDetails({ params }) {
  // Await params to correctly access id
  const { id } = await params; // Ensure that `params` is awaited first
  let product;
  
  try {
    // Fetch product details based on the product ID
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    product = response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-black font-bold">{product.title}</h1>
      <div className="flex flex-col lg:flex-row mt-6">
        <div className="lg:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-xl text-gray-700 font-semibold mt-4">${product.price}</p>
          <p className="mt-2 text-yellow-500">
            {'⭐'.repeat(Math.floor(product.rating))}
          </p>
          <p className="mt-2 text-gray-700">Category: {product.category}</p>
          <Link href="/">
              <button className="mt-8 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
                Back to Product Listing
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}



