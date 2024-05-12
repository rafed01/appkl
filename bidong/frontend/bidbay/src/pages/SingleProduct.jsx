import React from 'react';

const SingleProduct = ({ productId }) => {
  // Fetch product details based on productId (e.g., from an API or local data)
  const product = getProductDetails(productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.itemName}</h1>
      <p>Category: {product.category}</p>
      <p>Current Bid: ${product.currentBid}</p>
      {/* Display other product details */}
    </div>
  );
};

export default SingleProduct;

