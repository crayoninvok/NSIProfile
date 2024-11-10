export interface IProductCom {
  fields: {
    Productcomname: string;
    price: string;
    description: string;
    Productcomimage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string; 
  };
}
