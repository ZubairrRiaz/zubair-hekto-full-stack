
export const productsData = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'id',
        type: 'number',
        title: 'ID',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',

      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
 
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Is Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
          ],
        },
      },
    ],
  };