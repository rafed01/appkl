import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../styles/BidDetails.css";  // Adjust the path if necessary

const BidDetails = () => {
  const { id } = useParams();
  const [bid, setBid] = useState(null);

  useEffect(() => {
    fetchBidDetails();
  }, []);

  const fetchBidDetails = async () => {
    try {
      const response = await api.get(`/api/bids/${id}`);
      setBid(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching bid details:", error);
    }
  };

  return (
    <div className="container">
      {bid ? (
        <div className="bid-details">
          <h2>{bid.bid_name}</h2>
          <div className="image-carousel">
            {[bid.bid_image1, bid.bid_image2, bid.bid_image3, bid.bid_image4, bid.bid_image5].map((imageUrl, index) => (
              imageUrl && <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="carousel-image" />
            ))}
          </div>
          <p><strong>Description:</strong> {bid.bid_description}</p>
          <p><strong>Starting Price:</strong> ${bid.starting_price}</p>
          {/* Add other bid details here */}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default BidDetails;
