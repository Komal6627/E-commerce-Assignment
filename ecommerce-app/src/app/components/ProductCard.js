import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Image
         src={product?.images?.[0] || product?.thumbnail || '/images/fallback-image.jpg'}// Use a valid fallback path
        alt={product?.name || 'Product Image'}
        width={500}
        height={500}
        className="w-full h-60 object-cover mb-4"
      />
      <h3 className="text-xl text-black font-semibold mb-2">{product?.title || 'Unnamed Product'}</h3>
      <p className="text-gray-700 mb-2">${product?.price || 'N/A'}</p>
      <p className="text-yellow-500">{'⭐'.repeat(Math.floor(product?.rating || 0))}</p>
      {console.log('Product Data:', product)}      
      <Link href={`/product/${product?.id}`}>
        <button className="bg-violet-600 text-white p-2 rounded mt-4 w-full text-center">
          View Details
        </button>
      </Link>
    </div>
  );
}
