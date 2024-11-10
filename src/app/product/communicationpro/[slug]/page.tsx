import { IProductCom } from '@/types/product';
import { getProductCom } from '@/lib/product';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

// This function generates the paths for each product's slug
export async function generateStaticParams() {
  const products = await getProductCom();
  return products.map((product) => ({
    slug: product.fields.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await getProductCom();
  const product = products.find((p) => p.fields.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(product.fields.price.replace(/[^0-9.-]+/g, '')));

  // Custom render options for compact rich text
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-2 text-gray-700 leading-snug">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-2xl font-bold text-gray-800 mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-xl font-semibold text-gray-700 mb-3">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-lg font-medium text-gray-600 mb-2">{children}</h3>,
      [BLOCKS.HEADING_4]: (node: any, children: any) => <h4 className="text-md font-medium text-gray-600 mb-1">{children}</h4>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc list-inside mb-2 pl-5">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal list-inside mb-2 pl-5">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1 text-gray-700 leading-snug">{children}</li>,
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} className="text-blue-500 underline">
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-gray-100">
         <Link href="/product/communicationpro" passHref>
          <button className="text-gray-800 hover:text-gray-600 mb-4 inline-flex items-center">
            ← Back
          </button>
        </Link>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8 lg:p-12 max-w-[80%] mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
          <img
            src={product.fields.Productcomimage.fields.file.url}
            alt={product.fields.Productcomname}
            className="object-cover rounded-md shadow-sm w-full"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-[50%] lg:pl-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.fields.Productcomname}
          </h1>
          <p className="text-lg font-medium text-gray-600 mb-4">{formattedPrice}</p>
          <div className="text-gray-700 text-base leading-snug mb-4">
            {typeof product.fields.description === 'object' && 'nodeType' in product.fields.description
              ? documentToReactComponents(product.fields.description as Document, renderOptions)
              : product.fields.description}
          </div>
          <button className="w-full lg:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded shadow transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
