import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

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
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching bid details:", error);
    }
  };

  return (
    <div className="container">
      {bid ? (
        <div className="bid-details">
          <h2>{bid.bid_name}</h2>
          {/* Display bid images in a carousel */}
          <div className="image-carousel">
            {[bid.bid_image1, bid.bid_image2, bid.bid_image3, bid.bid_image4, bid.bid_image5].map((imageUrl, index) => (
              imageUrl && <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="carousel-image" />
            ))}
          </div>
          {/* Display additional bid details */}
          <p>Description: {bid.bid_description}</p>
          <p>Starting Price: ${bid.starting_price}</p>
          {/* Other bid details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BidDetails;
