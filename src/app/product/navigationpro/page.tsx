import { getProductNav } from "@/lib/productn";
import { IProNav } from "@/types/productn";
import Link from "next/link";

export default async function ProductListNav() {
  const products: IProNav[] = await getProductNav();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-12 text-center text-violet-500 mt-[6rem]">
        Navigation Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 p-5 flex flex-col items-center"
            >
              {product.fields.productImage?.fields.file.url ? (
                <img
                  src={product.fields.productImage.fields.file.url}
                  alt={product.fields.productName}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-500 flex items-center justify-center rounded-md mb-4 shadow-md">
                  <span className="text-white">Image not available</span>
                </div>
              )}

              <h2 className="text-xl font-semibold text-center text-violet-100 mb-2">
                {product.fields.productName}
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                {product.fields.price}
              </p>
               <Link href={`/product/navigationpro/${product.fields.slug}`} passHref>
              <button className="px-4 py-2 mt-auto bg-violet-600 hover:bg-violet-700 text-white rounded-md shadow-md transition duration-300">
                  View Details
                </button>
                </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No products available.</p>
        )}
      </div>
    </div>
  );
}