import { Document } from "@contentful/rich-text-types";

export interface IProNav {
  fields: {
    productName: string;  // Matches "Product name"
    productImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };  // Matches "Product image" (Media type)
    price: string;  // Matches "Price"
    slug: string;   // Matches "Slug"
    description: Document;  // Matches "Description" (Rich text)
  };
}
