export const productsAdapter = response => {
  const { data } = response;

  // Would can just write the object keys since would use a shorthand, but in the future if the api changes for any reason, this adapater will not break if done this way
  data.map(product => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      brand: product.brand,
      stock: product.stock,
      category: product.category,
      images: product.images,
    };
  });
};
