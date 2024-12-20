import { IProductCom } from "@/types/product";
import { getProductCom } from "@/lib/product";
import Link from "next/link";

export default async function ProductListPage() {
  let products: IProductCom[] = [];

  try {
    products = await getProductCom();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="mx-auto py-10 bg-radial-gradient from-darkBlue to-darkNavy w-full">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-12 text-center text-slate-100 mt-[5vh]">
          Product List
        </h1>
        <Link href="/product/" passHref>
          <button className="btn text-gray-800 hover:text-gray-600 mb-4 md:ml-[2rem] ml-[35px] font-semibold ">
            ← Back
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-7">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 hover:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 p-5 flex flex-col items-center"
              >
                <img
                  src={product.fields.Productcomimage.fields.file.url}
                  alt={product.fields.Productcomname}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
                />
                <h2 className="text-xl font-semibold text-center text-violet-100 mb-2">
                  {product.fields.Productcomname}
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  Price: {product.fields.price || "Not available"}
                </p>
                <Link href={`/product/communicationpro/${product.fields.slug}`}>
                  <button className="px-4 py-2 mt-auto bg-violet-600 hover:bg-violet-700 text-white rounded-md shadow-md transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
