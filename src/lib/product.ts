import { IProductCom } from '@/types/product';

const baseUrl = process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL as string;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

if (!baseUrl || !spaceId || !token) {
  throw new Error("Missing one or more required Contentful environment variables.");
}

interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface ContentfulItem {
  fields: {
    productnavname?: string;
    description?: string;
    price?: number;
    slug?: string;
    Productcomimage?: {
      sys: {
        id: string;
      };
    };
    productnavimage?: {
      sys: {
        id: string;
      };
    };
  };
}

export const getProductCom = async (): Promise<IProductCom[]> => {
  const url = `${baseUrl}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=communicationProduct`;

  const res = await fetch(url, { next: { revalidate: 3 } });

  if (!res.ok) {
    console.error('Failed to fetch data:', res.status, res.statusText);
    throw new Error('Failed to fetch data from Contentful');
  }

  const data = await res.json();
  const items: ContentfulItem[] = data.items;
  const assets: ContentfulAsset[] = data.includes.Asset;

  const products: IProductCom[] = items.map((item) => {
    const productName = item.fields.productnavname || 'Unnamed Product';
    const imageId = item.fields.Productcomimage?.sys.id || item.fields.productnavimage?.sys.id;
    const imageAsset = assets.find((asset) => asset.sys.id === imageId);

    return {
      fields: {
        Productcomname: productName,
        description: item.fields.description,
        price: item.fields.price?.toString() || '',
        Productcomimage: {
          fields: {
            file: {
              url: imageAsset?.fields.file.url || '/placeholder.jpg', // Use placeholder if no URL
            },
          },
        },
        slug: item.fields.slug || '',
      },
    } as IProductCom;
  });

  return products;
};
