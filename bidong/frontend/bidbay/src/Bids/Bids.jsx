import React from "react";
import "./Bids.css";
import mercedes from "../pages/images/mercedes.jpg";
import SingleProduct from "../pages/SingleProduct";

const Bids = () => {
  const bids = [
    {
      id: 1,
      itemName: "MERCEDES CLASSE G IV",
      currentBid: 139.9,
      category: "Cars",
      imageUrl: "path/to/image1.jpg",
    },
    {
      id: 2,
      itemName: "Item 2",
      currentBid: 75,
      category: "Divers",
      imageUrl: "path/to/image2.jpg",
    },
    {
      id: 3,
      itemName: "Item 3",
      currentBid: 100,
      category: "Houses",
      imageUrl: "path/to/image3.jpg",
    },
    // Add more items to fill the grid
    {
      id: 4,
      itemName: "Item 4",
      currentBid: 120,
      category: "Electro",
      imageUrl: "path/to/image4.jpg",
    },
    {
      id: 5,
      itemName: "Item 5",
      currentBid: 150,
      category: "Cars",
      imageUrl: "path/to/image5.jpg",
    },
    {
      id: 6,
      itemName: "Item 6",
      currentBid: 90,
      category: "Divers",
      imageUrl: "path/to/image6.jpg",
    },
    {
      id: 7,
      itemName: "Item 7",
      currentBid: 80,
      category: "Houses",
      imageUrl: "path/to/image7.jpg",
    },
    {
      id: 8,
      itemName: "Item 8",
      currentBid: 110,
      category: "Electro",
      imageUrl: "path/to/image8.jpg",
    },
    {
      id: 9,
      itemName: "Item 9",
      currentBid: 130,
      category: "Cars",
      imageUrl: "path/to/image9.jpg",
    },
  ];
  const viewProduct = (productId) => {
    // Implement the logic to navigate to the single product page using React Router
    console.log("View Product:", productId);
  };

  return (
    <div className="container">
      <div className="bids-page">
        <div className="filter-card">
          <h3 className="filter-title">Shop By Categories</h3>
          <ul className="ps-0">
            <li>Cars</li>
            <li>Divers</li>
            <li>Houses</li>
            <li>Electro</li>
          </ul>
        </div>
        <div className="bids-list">
          {bids.map((bid) => (
            <div key={bid.id} className="bid-item">
              <img src={mercedes} alt={bid.itemName} className="img-fluid" />
              <h2>{bid.itemName}</h2>
              <p>Category: {bid.category}</p>
              <p>Current Bid: ${bid.currentBid}</p>
              {/* Additional content for each bid */}
              <div className="bid-item">
                {/* Other bid item content */}
                <button id="SingleProduct"
                  className="view-product-btn"
                  onClick={() => viewProduct(bid.id)}
                >
                  View Product
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bids;
