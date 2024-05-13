import React, { useState, useEffect } from "react";
import api from "../api";
import "./Bids.css";
// Import any necessary images

const Bids = () => {
  const [bids, setBids] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchBids();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/api/categories/");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBids = async () => {
    try {
      const response = await api.get("/api/bids/");
      setBids(response.data); // Assuming response.data is an array of bid objects
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "";
  };

  const viewProduct = (id) => {
    // Implement the logic to navigate to the single product page using React Router
    alert("View Product:" + id);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleResetFilter = () => {
    setSelectedCategory(null);
  };

  const filteredBids = selectedCategory
    ? bids.filter((bid) => bid.bid_category === selectedCategory)
    : bids;

  return (
    <div className="container">
      <div className="bids-page">
        <div className="filter-card">
          <h3 className="filter-title">Shop By Categories</h3>
          <ul className="ps-0">
            <li onClick={handleResetFilter}>All</li>
            {categories.map((category) => (
              <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bids-list">
          {filteredBids.map((bid) => (
            <div key={bid.id} className="bid-item">
              {/* Replace the img src with the actual bid image */}
              <img src={bid.bid_image1} alt={bid.bid_name} className="img-fluid" />
              <h2>{bid.bid_name}</h2>
              <p>Description: {bid.bid_description}</p>
              <p>Starting Price: ${bid.starting_price}</p>
              <p>Category: {getCategoryName(bid.bid_category)}</p>
              {/* Additional content for each bid */}
              <div className="bid-item">
                {/* Other bid item content */}
                <button
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
