import { getProductNav } from "@/lib/productn";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES, Node } from "@contentful/rich-text-types";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await getProductNav();
  const product = products.find((p) => p.fields.slug === params.slug);

  if (!product) {
    notFound();
    return null;
  }

  // Custom render options for Contentful rich text
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p className="mb-2 text-gray-700 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="text-xl font-medium text-gray-600 mb-2">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="list-disc list-inside mb-4 pl-5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="list-decimal list-inside mb-4 pl-5">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
        <li className="mb-1 text-gray-700 leading-relaxed">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
        <a href={node.data.uri} className="text-blue-500 underline">
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-center py-5 bg-gray-200">
      <Link href="/product/navigationpro" passHref>
        <button className="btn text-gray-800 hover:text-gray-600 mb-4 inline-flex items-center mt-[5rem] lg:ml-[12rem] ml-[2rem] font-semibold">
          ← Back
        </button>
      </Link>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8 lg:p-12 max-w-[80%] mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
          <img
            src={product.fields.productImage.fields.file.url}
            alt={product.fields.productName}
            className="object-cover rounded-md shadow-sm w-full"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-[50%] lg:pl-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.fields.productName}
          </h1>
          <div className="text-gray-700 text-base leading-relaxed mb-4">
            {product.fields.description ? 
              documentToReactComponents(product.fields.description as Document, renderOptions)
              : "No description available"}
          </div>
          <p className="text-lg font-medium text-gray-600 mb-4">
            {product.fields.price}
          </p>
          <button className="w-full lg:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded shadow transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
